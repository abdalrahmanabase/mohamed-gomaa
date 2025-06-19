<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Patient extends Model
{
    use HasFactory;

      protected $fillable = [
        'name',
        'address',
        'phone',
        'diagnosis',
        'next_session_at',
        'description',
        'type',
        'session_status',
    ];

    protected $casts = [
        'next_session_at' => 'datetime',
        'type' => 'string',
    ];
}
