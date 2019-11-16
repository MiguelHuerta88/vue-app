<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BooksCollection;
use App\Http\Resources\Books as BooksResource;
use App\Models\Books;

class BooksController extends Controller
{
	/**
	 * Return Books. JSON response
	 *
	 * @return     BooksCollection
	 */
    public function books()
    {
    	// pull books
    	$books = Books::all();

    	return new BooksCollection($books);
    }

    /**
     * Get logo for pages
     *
     * @return  json
     */
    public function logo()
    {
        return response()->json([
        	'data' => [
                'logo' => asset('images/booklogo.png')
            ]
        ]);
    }

    /**
     * Show book.
     *
     * @param      \App\Models\Books  $book   The book
     *
     * @return     BookResource
     */
    public function show(Books $book)
    {
    	return new BooksResource($book);
    }

    /**
     * get most recent books
     *
     * @return     BooksCollection
     */
    public function mostRecent()
    {
    	$mostRecent = Books::orderBy('id', 'DESC')
            ->limit(10)
            ->with('images')
            ->get();
        return new BooksCollection($mostRecent);
    }
}
