<?php

use Illuminate\Database\Seeder;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
        	'title' => "Eloquent JavaScript, Second Edition",
        	'author' => "Marijn Haverbeke",
        	'published_on' => "2014-12-14 00:00:00",
	        "description" => "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications."
        ]);

        DB::table('books')->insert([
        	'title' => "Learning JavaScript Design Patterns",
        	'author' => "Addy Osmani",
        	'published_on' => "2012-07-01 00:00:00",
	        "description" => "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",

        ]);

        $faker = Faker\Factory::create();
        for($i = 0; $i < 11 ; $i++) {
            DB::table('books')->insert([
                'title' => $faker->text(100),
                'author' => $faker->name,
                'published_on' => $faker->time("Y-m-d H:i:s"),
                'description' => $faker->text
            ]);
        }
    }
}
