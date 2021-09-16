<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>请确认您的注册</title>
</head>

<body>
    <h4 class="text-dark mb-2">感谢您的注册</h4>
    <p class="mb-4">请点击下方的按钮来验证您的邮箱。</p>
    <div class="text-center">
        <a href="{{ route('users.confirmEmail', $user->activation_token) }}"><button class="btn btn-primary">立刻验证！</button></a>
    </div>
    <div class="text-center">
        <hr>
        <p class="small"><br>若非您本人操作，请忽略。<br></p>
    </div>
</body>

</html>
