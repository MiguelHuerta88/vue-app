<?php

use Illuminate\Database\Seeder;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$faker = Faker\Factory::create();
    	//dd($faker->image);
        for($i=1; $i < 33; $i++) {
        	DB::table('images')->insert([
        		'id' => $i,
        		'book_id' => $i,
        		'url' => $faker->imageUrl($width = 700, $height = 500)
        	]);
        }
    }
}
