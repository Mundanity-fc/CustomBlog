<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="keywords" content="申酉和风博客，技术分享，网络小说翻译，教程发布">
    <meta name="description" content="文章页面" />
    <meta name="author" content="Mundanity Fan" />
    <title>@yield('articleTitle')</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <!-- Font Awesome icons (free version)-->
    <script src="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/js/all.js"></script>
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link rel="stylesheet" href={{'/css/app.css'}}>
    <link rel="stylesheet" href="/css/editormd.css" />
</head>
<body>
<!-- 导航栏-->
@include('layout._nav')
<!-- 页头-->
@yield('header')
<!-- 正文区块-->
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-8">
            <!-- 正文内容-->
            <article>
                @yield('content')
            </article>
            <!-- 评论内容-->
            <section class="mb-5">
                <div class="card bg-light">
                    @yield('comment')
                </div>
            </section>
        </div>
        <!-- 侧边工具-->
        <div class="col-lg-4">
            @yield('side-widget')
        </div>
    </div>
</div>

<!-- 页脚-->
@include('layout._footer')
<script src={{'/js/app.js'}}></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
