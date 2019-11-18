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
Route::middleware(['https'])->group(function() {
	Route::get('/', 'SinglePageAppController@index')->name('home');
	Route::get('/book/{book}', 'SinglePageAppController@index');
	Route::get('/about-us', 'SinglePageAppController@index');
	Route::get('contact-us', 'SinglePageAppController@index');
	Route::get('/login', 'SinglePageAppController@index');
	Route::get('/register', 'SinglePageAppController@index');
	Route::get('/thank-you', 'SinglePageAppController@index');
	// should this route activate the user then redirect them?? Or should a true
	// SPA app handle this in the component and ping the API to do it
	Route::get('/activate/{token}', 'SinglePageAppController@index')->name('user.activate');
	// routes that require authenticated user
	Route::middleware(['auth'])->group(function() {
		Route::get('/user/settings', 'SinglePageAppController@index');
	});
	
});
