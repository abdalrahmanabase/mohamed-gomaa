<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Carbon\Carbon;
use Filament\Facades\Filament;
use Filament\Support\Facades\FilamentAsset;
use Filament\Support\Assets\Css;
use Filament\Support\Assets\Js;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
{
    Carbon::setLocale('ar');

    Filament::serving(function (): void {
        // your global CSS/JS...
        FilamentAsset::register([
            Css::make('custom-style', asset('css/style.css')),
            Js::make('table-labels',    asset('js/table-labels.js')),
        ]);
    });
}
}