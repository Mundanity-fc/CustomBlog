<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Auth;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(!Auth::check()||Auth::user()->user_group<2){
            $articles = Article::orderBy('created_at','desc')->where('online', true)->paginate(5);
            return view('list',compact('articles'));
        }

        if(Auth::user()->user_group=2){
            $articles = Article::orderBy('created_at','desc')->paginate(5);
            return view('list',compact('articles'));
        }


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('write');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
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
            'subtitle' => $request->subtitle,
            'online' => $request->online
        ]);
        return redirect()->route('articles.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     *
     */
    public function show($param)
    {
        if(is_int($param))
            $articleFound = Article::where('id', $param)->firstOrFail();
        else
            $articleFound = Article::where('slug', $param)->firstOrFail();
        if(!Auth::check()){
            if ($articleFound->online)
                return view('post', ['article' => $articleFound]);
            else
                return redirect()->route('articles.index');
        }else{
            if(Auth::user()->user_group<2){
                if ($articleFound->online)
                    return view('post', ['article' => $articleFound]);
                else
                    return redirect()->route('articles.index');
            }else{
                return view('post', ['article' => $articleFound]);
            }
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
