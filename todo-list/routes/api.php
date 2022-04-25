<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{ ToDoController };

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/todos', 'ToDoController@getTodos');
Route::post('/post', 'ToDoController@postTodo');
Route::post('/update', 'ToDoController@updateTodo');
Route::delete('/delete', 'ToDoController@deleteTodo');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
