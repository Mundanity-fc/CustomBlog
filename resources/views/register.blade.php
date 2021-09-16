@extends('layout.Templete._formTemplete')

@section('title')
    登录
@stop

@section('content')
    <div class="col-sm-6 p-4" style="min-height:500px;">
        <div class="text-center">
            <div class="h3 fw-light">注册</div>
            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <ul>
                        @foreach($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
        <form id="contactForm" method="POST" action="{{ route('users.store') }}">
            {{ csrf_field() }}
            <div class="form-floating mb-3">
                <input class="form-control" name="name" type="name" value="{{ old('name') }}"/>
                <label for="name">用户名</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" name="email" type="email" value="{{ old('email') }}"/>
                <label for="email">邮箱</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" name="password" type="password" value="{{ old('password') }}"/>
                <label for="password">密码</label>
            </div>

            <div class="form-floating mb-3">
                <input class="form-control" name="password_confirmation" type="password" value="{{ old('password_confirmation') }}"/>
                <label for="password_confirmation">确认密码</label>
            </div>
            <!-- Submit button -->
            <div class="d-grid">
                <button class="btn btn-primary btn-lg" id="submitButton" type="submit">提交</button>
            </div>
        </form>
        <!-- End of contact form -->
    </div>
@stop
