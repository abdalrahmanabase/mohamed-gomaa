<?php

namespace App\Filament\Resources\InfoCardResource\Pages;

use App\Filament\Resources\InfoCardResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditInfoCard extends EditRecord
{
    protected static string $resource = InfoCardResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
