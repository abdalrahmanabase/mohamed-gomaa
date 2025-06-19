<?php
// FILE: app/Filament/Resources/PatientResource.php
// This file defines the Filament resource for creating, editing, and listing patients.
// It controls the main data entry forms and tables in your admin panel.

namespace App\Filament\Resources;

use App\Filament\Resources\PatientResource\Pages;
use App\Models\Patient;
use Filament\Forms;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Forms\Components\{TextInput, Textarea, DateTimePicker, Select};
use Filament\Tables\Actions\{Action, EditAction, DeleteAction};
use Illuminate\Database\Eloquent\Builder;

class PatientResource extends Resource
{
    protected static ?string $model = Patient::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $label = 'مريض';
    protected static ?string $pluralLabel = 'المرضى';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\Section::make()
                ->schema([
                    TextInput::make('name')->label('الاسم')->required(),
                    TextInput::make('phone')->label('رقم الهاتف')->tel(),
                    Select::make('type')
                        ->label('نوع الجلسة')
                        ->options([
                            'bee venom' => 'لسع النحل',
                            'physical therapy' => 'علاج طبيعي',
                            'plasma' => 'بلازما',
                            'hijama' => 'حجامة',
                            'other' => 'أخرى',
                        ])
                        ->required(),
                    DateTimePicker::make('next_session_at')
                        ->label('الجلسة القادمة')
                        ->displayFormat('d/m/Y g:i A')
                        ->native(false)
                        // When creating/editing a record, if the date is changed,
                        // we should reset the status to 'upcoming'.
                        ->reactive()
                        ->afterStateUpdated(function ($set) {
                            $set('session_status', 'upcoming');
                        }),
                    // This field is hidden but will be set automatically if the date changes.
                    Forms\Components\Hidden::make('session_status')->default('upcoming'),
                    Textarea::make('address')->label('العنوان')->columnSpanFull(),
                    Textarea::make('diagnosis')->label('التشخيص')->columnSpanFull(),
                    Textarea::make('description')->label('ملاحظات')->columnSpanFull(),
                ])->columns(2),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')->label('الاسم')->searchable(),
                Tables\Columns\TextColumn::make('phone')->label('رقم الهاتف'),
                Tables\Columns\TextColumn::make('type')->label('نوع الجلسة')->badge(),
                Tables\Columns\TextColumn::make('session_status')
                    ->label('حالة الجلسة')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'upcoming' => 'warning',
                        'done' => 'success',
                    })
                    ->formatStateUsing(fn (string $state): string => match ($state) {
                        'upcoming' => 'قادمة',
                        'done' => 'تمت',
                    }),
                Tables\Columns\TextColumn::make('next_session_at')
                    ->label('الجلسة القادمة')
                    ->dateTime('d/m/Y g:i A')
                    ->sortable(),
            ])
            ->defaultSort('next_session_at', 'asc')
            ->filters([
                Tables\Filters\SelectFilter::make('session_status')
                    ->label('حالة الجلسة')
                    ->options([
                        'upcoming' => 'قادمة',
                        'done' => 'تمت',
                    ])
            ])
            ->actions([
                EditAction::make()->label('تعديل'),
                DeleteAction::make()->label('حذف'),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPatients::route('/'),
            'create' => Pages\CreatePatient::route('/create'),
            'edit' => Pages\EditPatient::route('/{record}/edit'),
        ];
    }
}