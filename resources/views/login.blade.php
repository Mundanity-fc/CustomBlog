@extends('layout.Templete._formTemplete')

@section('title')
    登录
@stop

@section('content')
    <div class="col-sm-6 p-4" style="min-height:500px;">
        <div class="text-center">
            <div class="h3 fw-light">登录</div>
            @foreach (['danger', 'warning', 'success', 'info'] as $msg)
                @if(session()->has($msg))
                    <div class="flash-message">
                        <p class="alert alert-{{ $msg }}">
                            {{ session()->get($msg) }}
                        </p>
                    </div>
                @endif
            @endforeach
        </div>
        <form method="POST" action="{{ route('Session.Login') }}">
            {{ csrf_field() }}
            <div class="form-floating mb-3">
                <input class="form-control" name="email" type="email" value="{{ old('email') }}"/>
                <label for="email">邮箱</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" name="password" type="password" />
                <label for="password">密码</label>
            </div>

            <!-- Submit button -->
            <div class="d-grid">
                <button class="btn btn-success btn-lg" id="submitButton" type="submit">提交</button>
            </div>
            <hr />
            <div class="d-grid">
                <input class="btn btn-primary btn-lg" type="button" value="注册" onclick = "window.location.href = '/register'">
            </div>
        </form>
        <!-- End of contact form -->
    </div>
@stop
