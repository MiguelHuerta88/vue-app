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

        // this method is pointless/ Since the data is never used we end up pingin the api
    	return view('spa', ['data' => $books]);
    }

    public function logo()
    {
        return response()->json(asset('images/bookstore-logo.png'));
    }

    public function show(Books $book)
    {
        $book->load('images');

        // this method is pointless/ Since the data is never used we end up pingin the api
        return view('spa', ['data' => $book]);
    }

    public function apiShow(Books $book)
    {
        $book->load('images');
        return response()->json($book);
    }
}
