<?php
namespace App\Filament\Resources;

use App\Filament\Resources\InfoCardResource\Pages;
use App\Models\InfoCard;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;

class InfoCardResource extends Resource
{
    protected static ?string $model = InfoCard::class;
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $label = 'بطاقة';
    protected static ?string $pluralLabel = 'البطاقات';

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextInput::make('title')->label('العنوان')->required()->maxLength(255),
            Textarea::make('description')->label('الوصف')->rows(3),
            Select::make('location')
                ->label('مكان العرض في الصفحة')
                ->options([
                    'home' => 'الصفحة الرئيسية',
                    'about' => 'من نحن',
                    'Plasma' => 'بلازما',
                    'Physical_therapy' => 'العلاج الطبيعي',
                    'Cupping' => 'حجامة',
                    'services' => 'فوطه ناريه',
                    'Bee_poison' => 'مصل النحل',
                ])
                ->required(),
            FileUpload::make('image_path')
                ->label('الصورة')
                ->image()
                ->directory('info-cards')
                ->preserveFilenames()
                ->downloadable()
                ->openable()
                ->previewable(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image_path')->label('الصورة')->square(),
                TextColumn::make('title')->label('العنوان')->searchable(),
                TextColumn::make('description')->label('الوصف')->limit(50),
                TextColumn::make('location')->label('مكان العرض')->badge(),
                TextColumn::make('order')->label('الترتيب'),
            ])
            ->filters([
                SelectFilter::make('location')
                    ->label('مكان العرض')
                    ->options([
                        'home' => 'الصفحة الرئيسية',
                        'about' => 'من نحن',
                        'Plasma' => 'بلازما',
                        'Physical_therapy' => 'العلاج الطبيعي',
                        'Cupping' => 'حجامة',
                        'Bee_poison' => 'مصل النحل',
                    ])
                    ->indicateUsing(function ($state) {
                        $labels = [
                            'home' => 'الصفحة الرئيسية',
                            'about' => 'من نحن',
                            'Plasma' => 'بلازما',
                            'Physical_therapy' => 'العلاج الطبيعي',
                            'Cupping' => 'حجامة',
                            'Bee_poison' => 'مصل النحل',
                        ];
                        return is_array($state)
                            ? 'مكان العرض: ' . collect($state)->map(fn($v) => $labels[$v] ?? $v)->implode(', ')
                            : 'مكان العرض: ' . ($labels[$state] ?? $state);
                    }),
            ])
            ->reorderable('order')
            ->defaultSort('location')
            ->defaultGroup('location')
            ->groups(['location']);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListInfoCards::route('/'),
            'create' => Pages\CreateInfoCard::route('/create'),
            'edit' => Pages\EditInfoCard::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->orderByRaw("
                CASE
                    WHEN location = 'home' THEN 1
                    WHEN location = 'about' THEN 2
                    WHEN location = 'Plasma' THEN 3
                    WHEN location = 'Physical_therapy' THEN 4
                    WHEN location = 'Cupping' THEN 5
                    WHEN location = 'Bee_poison' THEN 6
                    ELSE 99
                END
            ")
            ->orderBy('order');
    }
}
