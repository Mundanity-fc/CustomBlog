@extends('layout.Templete._homeTemplete')

@section('title')
    初始化
@stop

@section('Header')
    <header class="masthead"
            style="background-image: url('/images/bg.png');">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1>站点初始化完成</h1>
                        <span class="subheading">请再次访问主页开始进行内容访问吧！</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
@stop

@section('Content')
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div id="test-editormd-view2">
                    <h1>已完成了部分配置的创建</h1>
                    <p>可以在数据库中通过修改configs表来修改配置</p>
                    <h1>已完成了部分特殊页面的配置</h1>
                    <p>可以在数据库的custom_posts表中修改相应设置</p>
                </div>
            </div>
        </div>
    </div>
@stop
