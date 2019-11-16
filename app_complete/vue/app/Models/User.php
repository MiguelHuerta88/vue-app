<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'username', 'password', 'address', 'city', 'state', 'zipcode', 'created_at', 'updated_at', 'email_verified_at', 'email_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Scope by username function
     *
     * @param      QueryBuilder
     * @param      string $username
     *
     * @return     QueryBuilder
     */
    public function scopeByUsername($query, $username)
    {
        return $query->where('username', $username);
    }

    /**
     * scope by email verified
     *
     * @param      QueryBuilder
     *
     * @return     QueryBuilder
     */
    public function scopeNullEmailToken($query)
    {
        return $query->whereNull('email_token');
    }
}
