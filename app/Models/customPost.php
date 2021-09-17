<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class customPost extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'subtitle',
        'body_md',
        'online'
    ];
}
