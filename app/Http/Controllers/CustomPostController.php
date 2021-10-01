<?php

namespace App\Http\Controllers;

use App\Models\config;
use Illuminate\Http\Request;
use App\Models\customPost;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ConfigController;


class CustomPostController extends Controller
{
    public static function init(){
        $customPost1 = customPost::create([
            'title' => '主页',
            'slug' => '主页',
            'subtitle' => '请在之后进行修改',
            'online' => '1'
        ]);
        $customPost2 = customPost::create([
            'title' => '关于',
            'slug' => '关于',
            'subtitle' => '请在之后进行修改',
            'online' => '1'
        ]);
    }

    public function homepage(){
        if(DB::table('configs')->where('config','isConfigured')->doesntExist()){
            ConfigController::init();
            self::init();
            return redirect()->route('config.initialization');
        }
        $configs = config::orderBy('id')->get();
        $specialPost = customPost::where('slug', '主页')->firstOrFail();
        return view('specialPost', compact('specialPost','configs'));
    }
    public function about(){
        $specialPost = customPost::where('slug', '关于')->firstOrFail();
        $configs = config::orderBy('id')->get();
        return view('specialPost', compact('specialPost','configs'));
    }
}
