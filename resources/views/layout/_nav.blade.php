<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/">Mundanity.tech</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            菜单
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto py-4 py-lg-0">
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/">主页</a></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/article">文章</a></li>
                <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/about">关于</a></li>
                @if(!Auth::check())
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/login">登录</a></li>
                @else
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4">{{ Auth::user()->name }}</a></li>
                    @if(Auth::user()->user_group == 2)
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/write">攥写</a></li>
                    @endif
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="/logout">登出</a></li>
                @endif
            </ul>
        </div>
    </div>
</nav>
