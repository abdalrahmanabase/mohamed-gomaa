<?php
// FILE: app/Filament/Pages/PatientCards.php
// This file has been updated to correctly calculate week start and end dates.

namespace App\Filament\Pages;

use App\Models\Patient;
use Filament\Pages\Page;
use Filament\Forms\Components\Select;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Concerns\InteractsWithForms;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;

class PatientCards extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $title = 'بطاقات المرضى';
    protected static string $view = 'filament.pages.patient-cards';
    protected static ?string $navigationLabel = 'بطاقات المرضى';
    protected static ?int $navigationSort = 2;

    public $patients;
    
    // Filter properties
    public ?string $type = null;
    public ?string $dateFilter = null;

    public function mount(): void
    {
        // Initial load of patients
        $this->loadPatients();
    }

    // This method defines the filter form at the top of the page.
    protected function getFormSchema(): array
    {
        return [
            Select::make('type')
                ->label('تصفية حسب نوع الجلسة')
                ->options([
                    'bee venom' => 'لسع النحل',
                    'physical therapy' => 'علاج طبيعي',
                    'plasma' => 'بلازما',
                    'hijama' => 'حجامة',
                    'fsd' => 'علاج بالأعشاب',
                    'tag' => 'تجميل',
                    'fat' => 'سمنه و نحافه',
                    'other' => 'أخرى',
                ])
                ->placeholder('كل الأنواع')
                ->reactive()
                ->columnSpan(['default' => 1, 'sm' => 1, 'md' => 1]),

            Select::make('dateFilter')
                ->label('تصفية حسب تاريخ الجلسة')
                ->options([
                    'today' => 'اليوم',
                    'this_week' => 'هذا الأسبوع',
                    'next_week' => 'الأسبوع القادم',
                    'this_month' => 'هذا الشهر',
                ])
                ->placeholder('كل المواعيد القادمة')
                ->reactive()
                ->columnSpan(['default' => 1, 'sm' => 1, 'md' => 1]),
        ];
    }
    
    // This runs whenever a filter value changes
    public function updated($property): void
    {
        if (in_array($property, ['type', 'dateFilter'])) {
            $this->loadPatients();
        }
    }
    
    // The core function to fetch patients for the view.
    public function loadPatients(): void
    {
        // Proactively update the status of sessions whose date has passed.
        Patient::where('session_status', 'upcoming')
            ->whereNotNull('next_session_at')
            ->whereDate('next_session_at', '<', Carbon::today())
            ->update(['session_status' => 'done']);

        // Now, fetch the patients to display.
        $this->patients = Patient::query()
            ->where('session_status', 'upcoming') 
            ->when($this->type, function (Builder $query, $type) {
                return $query->where('type', $type);
            })
            // Updated logic to handle the new date range filter
            ->when($this->dateFilter, function (Builder $query, $filter) {
                if ($filter === 'today') {
                    return $query->whereDate('next_session_at', Carbon::today());
                }
                
                // **FIX**: The week start and end days are now defined directly
                // in the query, which is the correct approach.
                if ($filter === 'this_week') {
                    return $query->whereBetween('next_session_at', [
                        Carbon::now()->startOfWeek(Carbon::SATURDAY), 
                        Carbon::now()->endOfWeek(Carbon::FRIDAY)
                    ]);
                }
                if ($filter === 'next_week') {
                    return $query->whereBetween('next_session_at', [
                        Carbon::now()->addWeek()->startOfWeek(Carbon::SATURDAY),
                        Carbon::now()->addWeek()->endOfWeek(Carbon::FRIDAY)
                    ]);
                }
                if ($filter === 'this_month') {
                    return $query->whereBetween('next_session_at', [
                        Carbon::today(),
                        Carbon::now()->endOfMonth()
                    ]);
                }
                return $query;
            })
            ->orderBy('next_session_at') // Order by the nearest session first
            ->get();
    }
}
