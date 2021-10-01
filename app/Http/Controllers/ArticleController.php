<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Auth;
use App\Models\config;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     *
     */
    public function index()
    {
        //配置
        $configs = config::orderBy('id')->get();

        //权限
        if(!Auth::check()||Auth::user()->user_group<2){
            $articles = Article::orderBy('created_at','desc')->where('online', true)->paginate(5);
            return view('list', compact('articles','configs'));
        }

        if(Auth::user()->user_group=2){
            $articles = Article::orderBy('created_at','desc')->paginate(5);
            return view('list', compact('articles','configs'));
        }


    }

    /**
     * Show the form for creating a new resource.
     *
     *
     */
    public function create()
    {
        //配置
        $configs = config::orderBy('id')->get();

        //权限
        if(!Auth::check())
            return redirect()->route('homepage');
        if(Auth::user()->user_group<2)
            return redirect()->route('homepage');
        if(Auth::user()->user_group=2)
            return view('write', compact('configs'));
    }

    /**
     * Store a newly created resource in storage.
     *
     *
     *
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'slug' => 'required',
            'online' => 'required'
        ]);

        $article = Article::create([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'slug' => $request->slug,
            'body_md' => $request->markdown,
            'online' => $request->online
        ]);
        return redirect()->route('articles.index');
    }

    /**
     * Display the specified resource.
     *
     *
     *
     */
    public function show($param)
    {
        //文章检索
        if(is_int($param)) {
            $article = Article::where('id', $param)->firstOrFail();
        }
        else {
            $article = Article::where('slug', $param)->firstOrFail();
        }

        //配置
        $configs = config::orderBy('id')->get();

        //权限策略
        if(!Auth::check()){
            if ($article->online)
                return view('post', compact('article','configs'));
            else
                return redirect()->route('articles.index');
        }else if(Auth::user()->user_group<2){
            if ($article->online) {
                return view('post', compact('article', 'configs'));
            }
            return redirect()->route('articles.index');
        }else{
            return view('post', compact('article','configs'));
        }

        //if article not published, redirect to articles.index page
        return redirect()->route('articles.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        //
    }
}
