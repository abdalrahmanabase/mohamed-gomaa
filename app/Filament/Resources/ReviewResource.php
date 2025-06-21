<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReviewResource\Pages;
use App\Filament\Resources\ReviewResource\RelationManagers;
use App\Models\Review;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\FileUpload;

class ReviewResource extends Resource
{
    protected static ?string $model = Review::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';
    
    protected static ?string $navigationLabel = 'التقييمات';
    
    protected static ?string $modelLabel = 'تقييم';
    
    protected static ?string $pluralModelLabel = 'التقييمات';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('معلومات التقييم')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('الاسم')
                            ->required()
                            ->maxLength(255),
                        
                        Forms\Components\TextInput::make('position')
                            ->label('المنصب/المهنة')
                            ->maxLength(255),
                        
                        Forms\Components\Textarea::make('content')
                            ->label('محتوى التقييم')
                            ->required()
                            ->rows(4)
                            ->maxLength(1000),
                        
                        Forms\Components\Select::make('rating')
                            ->label('التقييم')
                            ->options([
                                1 => '⭐',
                                2 => '⭐⭐',
                                3 => '⭐⭐⭐',
                                4 => '⭐⭐⭐⭐',
                                5 => '⭐⭐⭐⭐⭐',
                            ])
                            ->default(5)
                            ->required(),
                        
                        Forms\Components\FileUpload::make('image_path')
                            ->label('صورة العميل')
                            ->image()
                            ->imageEditor()
                            ->directory('reviews')
                            ->visibility('public'),
                        
                        Forms\Components\TextInput::make('order')
                            ->label('ترتيب العرض')
                            ->numeric()
                            ->default(0),
                        
                        Forms\Components\Toggle::make('is_active')
                            ->label('نشط')
                            ->default(true),
                    ])
                    ->columns(2)
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image_path')
                    ->label('الصورة')
                    ->circular()
                    ->size(50),
                
                Tables\Columns\TextColumn::make('name')
                    ->label('الاسم')
                    ->searchable()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('position')
                    ->label('المنصب')
                    ->searchable()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('content')
                    ->label('المحتوى')
                    ->limit(50)
                    ->searchable(),
                
                Tables\Columns\TextColumn::make('rating')
                    ->label('التقييم')
                    ->formatStateUsing(fn (int $state): string => str_repeat('⭐', $state))
                    ->sortable(),
                
                Tables\Columns\IconColumn::make('is_active')
                    ->label('نشط')
                    ->boolean()
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('order')
                    ->label('الترتيب')
                    ->sortable(),
                
                Tables\Columns\TextColumn::make('created_at')
                    ->label('تاريخ الإنشاء')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('الحالة')
                    ->placeholder('جميع التقييمات')
                    ->trueLabel('نشط فقط')
                    ->falseLabel('غير نشط فقط'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('order', 'asc');
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListReviews::route('/'),
            'create' => Pages\CreateReview::route('/create'),
            'edit' => Pages\EditReview::route('/{record}/edit'),
        ];
    }
}
