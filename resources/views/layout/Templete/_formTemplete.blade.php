<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>@yield('title')</title>
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css" />
    <style>
        body {
            background: #007bff;
            background: linear-gradient(to right, #0062E6, #33AEFF);
        }

        .bg-image {
            background-image: url('https://www.mundanity.tech/imgapi.php?type=h');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    </style>
</head>

<body>
<!-- Bootstrap 5 Contact Form Snippet -->

<div class="container-fluid px-5 my-5">
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="card border-0 rounded-3 shadow-lg overflow-hidden">
                <div class="card-body p-0">
                    <div class="row g-0">
                        <div class="col-sm-6 d-none d-sm-block bg-image"></div>
                            @yield('content')
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
</body>

</html>
