@extends('layout.Templete._writeTemplete')

@section('title')
    攥写
@stop

@section('Header')
    <header class="masthead"
            style="background-image: url('https://www.mundanity.tech/imgapi.php?type=h');">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1>攥写新的文章</h1>
                        <span class="subheading">Enjoy code with Markdown!</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
@stop

@section('Content')
    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
                @foreach($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <div id="test-editormd" name="editor">
        <textarea>{{ old('markdown') }}</textarea>
    </div>
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="my-5">
                    <form method="POST" action="{{ route('articles.store') }}">
                        {{ csrf_field() }}
                        <div class="form-floating">
                            <input class="form-control" name="title" type="text" value="{{ old('title') }}" />
                            <label for="title">文章标题</label>
                        </div>
                        <div class="form-floating">
                            <input class="form-control" name="subtitle" type="text" value="{{ old('subtitle') }}" />
                            <label for="subtitle">文章副标题</label>
                        </div>
                        <div class="form-floating">
                            <input class="form-control" name="slug" type="text" value="{{ old('slug') }}" />
                            <label for="slug">文章Slug</label>
                        </div>
                        <div class="form-floating">
                            <textarea class="form-control" id="text" name="markdown" style="height: 12rem" readonly>
                                请点击获取Markdown按钮
                            </textarea>
                            <label for="markdown">Markdown内容</label>
                        </div>
                        <br />
                        <div class="form-floating">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" id="online1" type="radio" name="online" value="1" />
                                <label class="form-check-label" for="online1">发布</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" id="online2" type="radio" name="online" value="0" />
                                <label class="form-check-label" for="online2">草稿</label>
                            </div>
                        </div>
                        <hr />
                        <button class="btn btn-primary text-uppercase" id="submitButton" type="submit">保存</button>
                        <a id="get-md-btn" class="btn btn-primary">提取Markdown</a>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="js/jquery.min.js"></script>
    <script src="js/editormd.js"></script>
    <script type="text/javascript">
        var testEditor;
        $(function() {
            testEditor = editormd("test-editormd", {
                width   : "90%",
                height  : 640,
                syncScrolling : "single",
                path    : "../lib/"
            });
            $("#get-md-btn").click(function(){
                $('#text').val(testEditor.getMarkdown());
            });
        });
    </script>
@endsection
