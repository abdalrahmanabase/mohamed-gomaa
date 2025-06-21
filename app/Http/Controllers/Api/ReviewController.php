<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{
    public function index()
    {
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
    }
}
