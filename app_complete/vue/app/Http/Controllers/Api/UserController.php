<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use App\Http\Resources\Users as UserResource;
use Carbon\Carbon;

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
        if (!User::byUsername($request->get('username'))->nullEmailToken()->count()) {
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

    /**
     * Find by token
     *
     * @param  $token
     * @return UserResource
     */
    public function token($token) {
        $user = User::findByToken($token)->first();

        if (!$user) {
            return response()->json([
                'data' => []
            ], 425);
        }
        // otherwise valid user was found return that
        return  new UserResource($user);
    }

    /**
     * activate user
     *
     * @param  $token
     * @return Response
     */
    public function activateUser($token = null) {
        if (!$token) {
            return response()->json([
                'data' => []
            ], 425);
        }

        // pull the user and activate
        $user = User::findByToken($token)->first();

        $user->email_token = null;
        $user->updated_at = Carbon::now();
        $user->save();

        return new UserResource(User::find($user->id));
    }
}
