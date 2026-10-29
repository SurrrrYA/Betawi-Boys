<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Kaos',
                'slug' => 'kaos',
                'description' => 'Koleksi kaos dengan identitas khas Betawi.',
            ],
            [
                'name' => 'Kemeja',
                'slug' => 'kemeja',
                'description' => 'Koleksi kemeja untuk berbagai kesempatan.',
            ],
            [
                'name' => 'Hoodie',
                'slug' => 'hoodie',
                'description' => 'Koleksi hoodie dengan desain khas Betawi.',
            ],
            [
                'name' => 'Jaket',
                'slug' => 'jaket',
                'description' => 'Koleksi jaket dengan desain eksklusif.',
            ],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(
                ['slug' => $category['slug']],
                $category
            );
        }
    }
}
