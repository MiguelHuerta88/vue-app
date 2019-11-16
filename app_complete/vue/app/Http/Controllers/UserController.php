<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Auth;

class UserController extends Controller
{
	public function checkAuthApi()
	{
		return response()->json(Auth::check());
	}
}