<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/**
 * 
 */
Route::get('/todo/all/{user_id}', 'ToDoController@getTodos');
Route::get('/todo/{id}', 'ToDoController@getTodoById');
Route::post('/todo/post', 'ToDoController@postTodo');
Route::post('/todo/update', 'ToDoController@updateTodo');
Route::delete('/todo/delete', 'ToDoController@deleteTodo');

/**
 * 
 */
Route::post('/user/register', 'UserController@registerUser');
Route::post('/user/signin', 'UserController@userValidates');

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
