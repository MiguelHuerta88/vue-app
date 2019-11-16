<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$faker = Faker\Factory::create();

    	for($i = 0; $i < 10; $i++) {
	        DB::table('users')->insert([
	        	'first_name' => $faker->firstName,
	        	'last_name' => $faker->lastName,
	        	'email' => $faker->email,
	        	'username' => $faker->userName,
	        	'password' => Hash::make('test'),
	        	'address' => $faker->address,
	        	'city' => $faker->city,
	        	'state' => $faker->stateAbbr,
	        	'zipcode' => '90023'
	        ]);
    	}
    }
}
