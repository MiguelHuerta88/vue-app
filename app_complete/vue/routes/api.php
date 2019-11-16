<?php

use Illuminate\Http\Request;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('/books', 'Api\BooksController@books');
Route::get('/logo', 'Api\BooksController@logo');
Route::get('/book/{book}', 'Api\BooksController@show');
Route::get('/books/most-recent', 'Api\BooksController@mostRecent');

// Auth routes
Route::post('/login', 'Auth\LoginController@postLogin');
Route::get('check/user', 'UserController@checkAuthApi');
Route::get('/logout', 'Auth\LoginController@logout');