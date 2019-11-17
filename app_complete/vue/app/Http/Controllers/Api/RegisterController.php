<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\Users as UsersResource;
use App\Models\User;
use Hash;
use Illuminate\Support\Str;
use App\Mail\UserRegistered;
use Mail;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
    	// by the time we get here the Request class should have validated the form for us
    	$attributes = $request->all();
    	// password has to be hashed before we insert
    	$attributes['password'] = Hash::make($attributes['password']);
    	$attributes['email_token'] = Str::random(256);
    	$user = User::create($attributes);

        Mail::to($user)->send(new UserRegistered($user));


    	return new UsersResource($user);
    }
}
