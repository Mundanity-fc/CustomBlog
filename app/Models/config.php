<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class config extends Model
{
    use HasFactory;
    public $timestamps = FALSE;
    protected $fillable = [
        'config',
        'key'
    ];
}
