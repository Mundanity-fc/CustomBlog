@extends('layout.Templete._listTemplete')

@section('Header')
    <header class="masthead"
            style="background-image: url('https://www.mundanity.tech/imgapi.php?type=h');">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>文章列表</h1>
                        <span class="subheading">列出了所有发布的文章</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
@stop

@section('articleList')
    @foreach($articles as $article)
        <!-- 文章预览-->
        <div class="post-preview">
            <a href="{{Route('articles.show', $article->slug)}}">
                <h2 class="post-title"> {{$article -> title}} </h2>
                <h3 class="post-subtitle"> {{$article -> subtitle}} </h3>
            </a>
            <p class="post-meta">
                由
                <a href="#!">Mundanity Fan</a>
                发布于
                {{$article -> created_at}}
            </p>
        </div>
        <!-- 分隔符-->
        <hr class="my-4" />
    @endforeach

    <!-- 分页器-->
    @include('layout._pager', ['paginator' => $articles])
@stop
