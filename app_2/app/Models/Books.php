<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Images;

class Books extends Model
{
    public $table = 'books';

    public function images()
    {
    	return $this->hasOne(Images::class, 'book_id', 'id');
    }
}
