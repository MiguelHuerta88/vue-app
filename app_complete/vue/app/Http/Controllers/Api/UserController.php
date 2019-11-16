<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Http\Requests\LoginRequest;
use App\Models\User;

class UserController extends Controller
{
	/**
	 * user info method
	 *
	 * @return  return response
	 */
    public function userInfo()
    {
    	return response()->json([
    		'data' => [
    			'isLoggedIn' => Auth::check()
    		]
    	]);
    }

    /**
     * login function
     *
     * @param      \App\Http\Request\LoginRequest  $request  The request
     *
     * @return  response
     */
    public function login(LoginRequest $request)
    {
        // before we try to log them in we need to make sure that this user has been verified
        if (User::byUsername($request->get('username'))->notVerified()->count()) {
            $errors['errors'] = [
                'notmatch' => 'User has not verified email yet. Please check email'
            ];

            return response()->json([
                'data' => $errors
            ]);
        }

    	// empty error array
    	$errors = array('errors' => []);

    	// we are going to send it off to AuthController to attempt to log us in.
    	if (!Auth::attempt($request->only('username', 'password'))) {
    		$errors['errors'] = [
				'notmatch' => 'Username/Password not matching'
    		];
    	}

    	return response()->json([
    		'data' => $errors
    	]);
    }

    /**
     * logout function
     *
     * @return  response
     */
    public function logout()
    {
    	Auth::logout();

    	return response()->json([
    		'data' => []
    	]);
    }
}
