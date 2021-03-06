@extends('layout.Templete._postTemplete')

@section('articleTitle')
    {{$article -> title}}
@stop

@section('header')
    <header class="masthead"
            style="background-image: url(
            @if($configs[0]->key)
            {{ $configs[1]->key }}
            @elseif(is_null($specialPost->coverURL))
            {{ $configs[2]->key }}
            @else
            {{ $specialPost->coverURL }}
            @endif()
                );">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1> {{$article -> title}} </h1>
                        <h2 class="subheading"> {{$article -> subtitle}} </h2>
                        <!-- 分类-->
                        @if(!$article -> online)
                            <a class="badge bg-warning text-decoration-none link-light">草稿</a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </header>
@stop

@section('content')
    <div id="test-editormd-view2">
                <textarea id="append-test" style="display:none;">
{{ $article -> body_md }}
                </textarea>
    </div>
    <script src="/js/jquery.min.js"></script>
    <script src="/lib/marked.min.js"></script>
    <script src="/lib/prettify.min.js"></script>
    <script src="/lib/raphael.min.js"></script>
    <script src="/lib/underscore.min.js"></script>
    <script src="/lib/sequence-diagram.min.js"></script>
    <script src="/lib/flowchart.min.js"></script>
    <script src="/lib/jquery.flowchart.min.js"></script>
    <script src="/js/editormd.js"></script>
    <script type="text/javascript">
        $(function() {
            var  testEditormdView2;

            testEditormdView2 = editormd.markdownToHTML("test-editormd-view2", {
                htmlDecode      : "style,script,iframe",
                emoji           : true,
                taskList        : true,
                tex             : true,
                flowChart       : true,
                sequenceDiagram : true,
            });
        });
    </script>
@stop

{{--
@section('comment')
    <div class="card-body">
        <!-- Comment form-->
        <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
        <!-- Comment with nested comments-->
        <div class="d-flex mb-4">
            <!-- Parent comment-->
            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
            <div class="ms-3">
                <div class="fw-bold">Commenter Name</div>
                If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                <!-- Child comment 1-->
                <div class="d-flex mt-4">
                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                    <div class="ms-3">
                        <div class="fw-bold">Commenter Name</div>
                        And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                    </div>
                </div>
                <!-- Child comment 2-->
                <div class="d-flex mt-4">
                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                    <div class="ms-3">
                        <div class="fw-bold">Commenter Name</div>
                        When you put money directly to a problem, it makes a good headline.
                    </div>
                </div>
            </div>
        </div>
        <!-- Single comment-->
        <div class="d-flex">
            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
            <div class="ms-3">
                <div class="fw-bold">Commenter Name</div>
                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
            </div>
        </div>
    </div>
@stop
--}}

@section('side-widget')
    <div class="card mb-4">
        <div class="card-header">信息</div>
        <div class="card-body">
            <div class="row">
                <ul class="list-unstyled mb-0">
                    <li>发布于{{ $article->created_at }}</li>
                    <li>修订于{{ $article->updated_at }}</li>
                </ul>
            </div>
        </div>
    </div>
    {{--
    <!-- Search widget-->
    <div class="card mb-4">
        <div class="card-header">Search</div>
        <div class="card-body">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
            </div>
        </div>
    </div>

    <!-- Categories widget-->
    <div class="card mb-4">
        <div class="card-header">Categories</div>
        <div class="card-body">
            <div class="row">
                <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                        <li><a href="#!">Web Design</a></li>
                        <li><a href="#!">HTML</a></li>
                        <li><a href="#!">Freebies</a></li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                        <li><a href="#!">JavaScript</a></li>
                        <li><a href="#!">CSS</a></li>
                        <li><a href="#!">Tutorials</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    --}}
    <!-- Side widget-->
    @if(Auth::check()&&Auth::user()->user_group==2)
        <div class="card mb-4">
            <div class="card-header">管理工具</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <ul class="list-unstyled mb-0">
                            <li><a href="#!">修改</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    @endif
@stop
