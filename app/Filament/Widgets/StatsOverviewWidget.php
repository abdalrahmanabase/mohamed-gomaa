<?php

namespace App\Filament\Widgets;

use App\Models\Patient;
use App\Models\InfoCard;
use App\Models\Review;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverviewWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('إجمالي المرضى', Patient::count())
                ->description('عدد المرضى المسجلين')
                ->descriptionIcon('heroicon-m-users')
                ->color('success'),
            
            Stat::make('الجلسات القادمة', Patient::where('session_status', 'upcoming')->count())
                ->description('جلسات لم تتم بعد')
                ->descriptionIcon('heroicon-m-calendar-days')
                ->color('warning'),
            
            Stat::make('البطاقات المعلوماتية', InfoCard::count())
                ->description('بطاقات في النظام')
                ->descriptionIcon('heroicon-m-rectangle-stack')
                ->color('info'),
            
            Stat::make('التقييمات', Review::where('is_active', true)->count())
                ->description('تقييمات نشطة')
                ->descriptionIcon('heroicon-m-star')
                ->color('primary'),
        ];
    }
}
