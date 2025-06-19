<?php

use Illuminate\Support\Facades\Schedule;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// This is the crucial line for your scheduling.
// It tells Laravel to run your notification command every day.
Schedule::command('app:send-session-reminders')->dailyAt('08:00');