<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfoCard extends Model
{
  protected $fillable = [
        'title',
        'description',
        'image_path',
        'location',
        'order',
    ];

    public function getImageUrlAttribute()
    {
        return $this->image_path ? asset('storage/' . $this->image_path) : null;
    }

}
