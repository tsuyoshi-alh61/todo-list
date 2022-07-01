<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/todo/{id?}', function () {
    return view('welcome');
});
Route::get('/signin', function () {
    return view('welcome');
});
Route::get('/signup', function () {
    return view('welcome');
});

Route::get('/dbTest/{id?}', 'App\Http\Controllers\dbTestController@selectUserData');
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
