<?php

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

Route::get('/', 'SinglePageAppController@index');
Route::get('/book/{book}', 'SinglePageAppController@index');
Route::get('/about-us', 'SinglePageAppController@index');
Route::get('contact-us', 'SinglePageAppController@index');
Route::get('/login', 'SinglePageAppController@index');
Route::get('/register', 'SinglePageAppController@index');
Route::get('/thank-you', 'SinglePageAppController@index');
Route::get('/activate/{token}', 'SinglePageAppController@index')->name('activate.user');

//Route::get('/books', 'SinglePageAppController@books');
