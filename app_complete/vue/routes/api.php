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

Route::get('/books', 'Api\BooksController@books')->name('api.books');
Route::get('/logo', 'Api\BooksController@logo')->name('api.logo');
Route::get('/book/{book}', 'Api\BooksController@show')->name('api.book');
Route::get('/books/most-recent', 'Api\BooksController@mostRecent')->name('api.most-recent');

// Auth routes
Route::post('/login', 'Api\UserController@login')->name('api.login');
Route::get('check/user', 'Api\UserController@userInfo')->name('api.user.check');
Route::get('/logout', 'Api\UserController@logout')->name('api.logout');
Route::post('/register', 'Api\RegisterController@register')->name('api.register');
Route::get('/activate/{token}', 'Api\UserController@activateUser')->name('api.user.activate');
Route::get('user/{token}', 'Api\UserController@token');