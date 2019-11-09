<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;

class SinglePageAppController extends Controller
{
    public function booksJson()
    {
    	$books = Books::all()->load('images');

    	return response()->json($books);
    }

    public function books()
    {
    	$books = Books::all()->load('images');

    	return view('spa', ['data' => $books]);
    }

    public function logo()
    {
        return response()->json(asset('images/bookstore-logo.png'));
    }
}
