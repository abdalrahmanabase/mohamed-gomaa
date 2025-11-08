<?php
use App\Http\Controllers\Api\InfoCardController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Models\InfoCard;
use App\Models\Review;
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

Route::get('/services', function () {
    $infoCards = InfoCard::where('location', 'services')
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

    return Inertia::render('Services/Services', [
        'infoCards' => $infoCards
    ]);
})->name('services');

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

Route::get('/derma', function () {
    $infoCards = InfoCard::where('location', 'Derma')
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

    return Inertia::render('Derma/Derma', [
        'infoCards' => $infoCards
    ]);
})->name('derma');

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

Route::get('/mesotherapy', function () {
    $infoCards = InfoCard::where('location', 'Mesotherapy')
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

    return Inertia::render('Mesotherapy/Mesotherapy', [
        'infoCards' => $infoCards
    ]);
})->name('mesotherapy');

Route::get('/herbs-oils', function () {
    $infoCards = InfoCard::where('location', 'HerbsOils')
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

    return Inertia::render('HerbsOils/HerbsOils', [
        'infoCards' => $infoCards
    ]);
})->name('herbs-oils');

// API Routes
Route::get('/api/reviews', function () {
    $reviews = Review::active()
        ->ordered()
        ->get(['id', 'name', 'position', 'content', 'image_path', 'rating', 'created_at'])
        ->map(function ($review) {
            return [
                'id' => $review->id,
                'name' => $review->name,
                'position' => $review->position,
                'content' => $review->content,
                'image' => $review->image_path ? Storage::url($review->image_path) : null,
                'rating' => $review->rating,
                'created_at' => $review->created_at->format('Y-m-d')
            ];
        });

    return response()->json($reviews);
});

Route::get('/cards/{location?}', [InfoCardController::class, 'index'])
    ->name('cards.index');