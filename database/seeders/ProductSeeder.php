<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'category_slug' => 'kaos',
                'name' => 'Kaos Ondel-Ondel',
                'slug' => 'kaos-ondel-ondel',
                'description' => 'Kaos dengan inspirasi budaya Ondel-Ondel khas Betawi.',
                'price' => 125000,
                'stock' => 25,
                'image' => null,
                'is_active' => true,
            ],
            [
                'category_slug' => 'kaos',
                'name' => 'Kaos Monas',
                'slug' => 'kaos-monas',
                'description' => 'Kaos dengan inspirasi ikon Monumen Nasional Jakarta.',
                'price' => 135000,
                'stock' => 20,
                'image' => null,
                'is_active' => true,
            ],
            [
                'category_slug' => 'kemeja',
                'name' => 'Kemeja Motif Betawi',
                'slug' => 'kemeja-motif-betawi',
                'description' => 'Kemeja dengan sentuhan motif yang terinspirasi dari budaya Betawi.',
                'price' => 250000,
                'stock' => 12,
                'image' => null,
                'is_active' => true,
            ],
            [
                'category_slug' => 'hoodie',
                'name' => 'Hoodie Betawi',
                'slug' => 'hoodie-betawi',
                'description' => 'Hoodie kasual dengan identitas khas Betawi.',
                'price' => 285000,
                'stock' => 15,
                'image' => null,
                'is_active' => true,
            ],
            [
                'category_slug' => 'jaket',
                'name' => 'Jaket Urban Jakarta',
                'slug' => 'jaket-urban-jakarta',
                'description' => 'Jaket bergaya urban yang terinspirasi dari kehidupan Jakarta.',
                'price' => 350000,
                'stock' => 8,
                'image' => null,
                'is_active' => true,
            ],
        ];

        foreach ($products as $product) {
            $category = Category::where(
                'slug',
                $product['category_slug']
            )->firstOrFail();

            unset($product['category_slug']);

            Product::updateOrCreate(
                ['slug' => $product['slug']],
                [
                    ...$product,
                    'category_id' => $category->id,
                ]
            );
        }
    }
}
