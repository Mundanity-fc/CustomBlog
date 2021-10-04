<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="keywords" content="申酉和风博客，技术分享，网络小说翻译，教程发布">
    <meta name="description" content="编写页面" />
    <meta name="author" content="Mundanity Fan" />
    <meta name="robots" content="noindex" />
    <title>@yield('title')</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="/css/editormd.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href={{'/css/app.css'}}>
</head>
<body>
<!-- 导航栏-->
@include('layout._nav')
<!-- 页头-->
@yield('Header')
<!-- 正文-->
<main class="mb-4">
    @yield('Content')
</main>
<!-- 页脚-->
@include('layout._footer')
<script src={{'/js/app.js'}}></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
