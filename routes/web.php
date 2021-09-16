<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SessionsController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('main');})->name('homepage');
Route::get('/article', [ArticleController::class,'index'])->name('articles.index');
Route::get('/post/{param}', [ArticleController::class,'show'])->name('articles.show');
Route::get('/login', [SessionsController::class,'create'])->name('Session.Login');;
Route::post('login', [SessionsController::class,'store'])->name('Session.Login');
Route::any('logout', [SessionsController::class,'destroy'])->name('logout');
Route::get('/register', [UserController::class,'create'])->name('users.create');
Route::post('/register', [UserController::class,'store'])->name('users.store');
Route::get('/register/{token}', [UserController::class,'ConfirmEmail'])->name('users.confirmEmail');
