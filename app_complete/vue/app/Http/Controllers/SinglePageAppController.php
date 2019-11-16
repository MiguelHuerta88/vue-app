<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;

class SinglePageAppController extends Controller
{
    public function index()
    {
        return view('spa');
    }
}
