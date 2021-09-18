<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\customPost;

class CustomPostController extends Controller
{
    public function homepage(){
        $specialPost = customPost::where('slug', '主页')->firstOrFail();
        return view('specialPost',compact('specialPost'));
    }
    public function about(){
        $specialPost = customPost::where('slug', '关于')->firstOrFail();
        return view('specialPost',compact('specialPost'));
    }
}
