@extends('layout.Templete._homeTemplete')

@section('title')
    主页
@stop

@section('Header')
    <header class="masthead"
            style="background-image: url('https://www.mundanity.tech/imgapi.php?type=h');">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1>{{ $specialPost -> title }}</h1>
                        <span class="subheading">{{ $specialPost -> subtitle }}</span>
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
                <textarea id="append-test" style="display:none;">
@if($specialPost->online)
{{ $specialPost -> body_md }}
@else
#尚处编辑中
@endif
                </textarea>
                </div>
            </div>
        </div>
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
