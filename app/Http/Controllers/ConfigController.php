<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\config;

class configController extends Controller
{
    public static function init(){
        $config1 = config::create([
            'config' => 'useDefaultImg',
            'key' => '1',
        ]);
        $config2 = config::create([
            'config' => 'defaultImgURL',
            'key' => '/images/bg.png',
        ]);
        $config3 = config::create([
            'config' => 'customImgURL',
            'key' => '',
        ]);
        $config4 = config::create([
            'config' => 'isConfigured',
            'key' => '1',
        ]);
    }
}
