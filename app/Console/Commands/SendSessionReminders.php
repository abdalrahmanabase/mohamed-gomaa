<?php
// FILE: app/Console/Commands/SendSessionReminders.php
// This is a new command you will create.
// Its job is to run daily, find upcoming sessions, and create notifications.

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Patient;
use App\Models\User;
use Filament\Notifications\Notification;
use Illuminate\Support\Carbon;

class SendSessionReminders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-session-reminders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends notifications for patient sessions that are upcoming.';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        // **FIX**: Use the application's configured timezone to avoid mismatches.
        $appTimezone = config('app.timezone');
        $this->info("Checking for upcoming sessions... (Timezone: {$appTimezone})");
        
        $users = User::all();
        if ($users->isEmpty()) {
            $this->warn('No users found to notify.');
            return;
        }

        $reminderDays = [0, 1, 3, 7];

        foreach ($reminderDays as $days) {
            // **FIX**: Base the target date on the application's timezone.
            $targetDate = Carbon::now($appTimezone)->addDays($days)->startOfDay();
            
            // **ENHANCEMENT**: Added more detailed logging for easier debugging.
            $this->line("Checking for date: {$targetDate->toDateString()} ({$days} days from now)");

            $patientsToRemind = Patient::query()
                ->where('session_status', 'upcoming')
                ->whereDate('next_session_at', $targetDate)
                ->get();

            if ($patientsToRemind->isNotEmpty()) {
                $this->info("-> Found {$patientsToRemind->count()} session(s) on this date.");
            }

            foreach ($patientsToRemind as $patient) {
                $messageBody = match ($days) {
                    0 => "جلسة المريض {$patient->name} اليوم.",
                    1 => "لدى المريض {$patient->name} جلسة غداً.",
                    default => "لدى المريض {$patient->name} جلسة بعد {$days} أيام.",
                };
                
                $patientUrl = \App\Filament\Resources\PatientResource::getUrl('edit', ['record' => $patient]);

                foreach ($users as $user) {
                    Notification::make()
                        ->title('تذكير بموعد جلسة')
                        ->body($messageBody)
                        ->icon('heroicon-o-calendar-days')
                        ->actions([
                            \Filament\Notifications\Actions\Action::make('view')
                                ->label('عرض سجل المريض')
                                ->url($patientUrl)
                        ])
                        ->sendToDatabase($user);
                }
            }
        }
        
        $this->info('Session reminder notifications sent successfully.');
    }
}