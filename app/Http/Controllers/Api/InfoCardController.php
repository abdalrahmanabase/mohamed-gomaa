<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\InfoCard;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class InfoCardController extends Controller
{
    public function index(Request $request, $location = 'home')
    {
        $cards = InfoCard::query()
            ->when($location, fn($q) => $q->where('location', $location))
            ->orderBy('order')
            ->get(['id', 'title', 'description', 'image_path', 'order']);

        // Normalize the image URL
        $cards = $cards->map(fn($card) => [
            'id'          => $card->id,
            'title'       => $card->title,
            'description' => $card->description,
            'image_path'  => $card->image_path
                ? Storage::url($card->image_path)
                : null,
            'order'       => $card->order,
        ]);

        return response()->json([
            'status' => 'success',
            'data' => $cards
        ]);
    }
}
