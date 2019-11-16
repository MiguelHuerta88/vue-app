<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|string|max:2',
            'last_name' => 'required|string|max:191',
            'email' => 'required|email|string|max:191|unique:users,email',
            'username' => 'required|string|max:50|unique:users,username',  
            'password' => 'required|string|max:191|min:6',
            'address' => 'required|string|max:256',
            'city' => 'required|string|max:100',
            'state' => 'required|max:2',
            'zipcode' => 'required|string|max:7'      
        ];
    }
}
