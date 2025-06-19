<?php

namespace App\Filament\Resources\InfoCardResource\Pages;

use App\Filament\Resources\InfoCardResource;
use App\Models\InfoCard;
use Filament\Resources\Pages\CreateRecord;

class CreateInfoCard extends CreateRecord
{
    protected static string $resource = InfoCardResource::class;

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $maxOrder = InfoCard::where('location', $data['location'])->max('order');
        $data['order'] = ($maxOrder ?? 0) + 1;
        return $data;
    }
}

