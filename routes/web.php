<?php
use App\Http\Controllers\InfoCardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Models\InfoCard;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

// Route::inertia('/about', 'About/About')->name('about');
// Route::inertia('/Bee_poison', 'Bee_poison/Bee_poison')->name('Bee_poison');
// Route::inertia('/Cupping', 'Cupping/Cupping')->name('Cupping');
Route::get('/', function () {
    $infoCards = InfoCard::where('location', 'home')
        ->orderBy('order')
        ->get(['id', 'title', 'description', 'image_path', 'order'])
        ->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

    return Inertia::render('Home/Home', [
        'infoCards' => $infoCards
    ]);
});
Route::get('/Physical_therapy', function () {
    $infoCards = InfoCard::where('location', 'Physical_therapy')
        ->orderBy('order')
        ->get(['id', 'title', 'description', 'image_path', 'order'])
        ->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

    return Inertia::render('Physical_therapy/Physical_therapy', [
        'infoCards' => $infoCards
    ]);
})->name('Physical_therapy');


Route::get('/Plasma', function () {
    $infoCards = InfoCard::where('location', 'Plasma')
        ->orderBy('order')
        ->get(['id', 'title', 'description', 'image_path', 'order'])
        ->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

    return Inertia::render('Plasma/Plasma', [
        'infoCards' => $infoCards
    ]);
})->name('Plasma');

Route::get('/Cupping', function () {
    $infoCards = InfoCard::where('location', 'Cupping')
        ->orderBy('order')
        ->get(['id', 'title', 'description', 'image_path', 'order'])
        ->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

    return Inertia::render('Cupping/Cupping', [
        'infoCards' => $infoCards
    ]);
})->name('Cupping');

Route::get('/Bee_poison', function () {
    $infoCards = InfoCard::where('location', 'Bee_poison')
        ->orderBy('order')
        ->get(['id', 'title', 'description', 'image_path', 'order'])
        ->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

    return Inertia::render('Bee_poison/Bee_poison', [
        'infoCards' => $infoCards
    ]);
})->name('Bee_poison');

Route::get('/about', function () {
    $infoCards = InfoCard::where('location', 'about')
        ->orderBy('order')
        ->get(['id', 'title', 'description', 'image_path', 'order'])
        ->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

    return Inertia::render('About/About', [
        'infoCards' => $infoCards
    ]);
})->name('about');

Route::get('/cards/{location?}', [InfoCardController::class, 'index'])
    ->name('cards.index');