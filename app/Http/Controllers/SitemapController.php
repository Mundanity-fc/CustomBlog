<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class SitemapController extends Controller
{
    public function index(){
        $articles = Article::orderBy('created_at','desc')->where('online', true)->get();
        return response()
            ->view('sitemap', compact('articles'))
            ->header('Content-Type', 'text/xml');
    }
    public function index_baidu(){
        $articles = Article::orderBy('created_at','desc')->where('online', true)->get();
        return response()
            ->view('sitemap_baidu', compact('articles'))
            ->header('Content-Type', 'text/xml');
    }
}
