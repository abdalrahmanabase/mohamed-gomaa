<?php

namespace App\Filament\Resources\InfoCardResource\Pages;

use App\Filament\Resources\InfoCardResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListInfoCards extends ListRecords
{
    protected static string $resource = InfoCardResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
