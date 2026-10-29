<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Product;
use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Menampilkan katalog produk dan artikel edukasi.
     */
    public function index(): Response
    {
        $products = Product::query()
            ->with('category:id,name')
            ->where('is_active', true)
            ->orderByDesc('created_at')
            ->get([
                'id',
                'category_id',
                'name',
                'slug',
                'description',
                'price',
                'stock',
                'image',
            ]);

        // Ambil maksimal 3 artikel yang sudah dipublikasikan.
        $educationArticles = Article::published()
            ->latest('published_at')
            ->limit(3)
            ->get()
            ->map(fn (Article $article) => [
                'number' => str_pad(
                    (string) $article->id,
                    2,
                    '0',
                    STR_PAD_LEFT
                ),
                'category' => $article->category ?: 'UMUM',
                'title' => $article->title,
                'slug' => $article->slug,
                'description' => $article->excerpt ?: '',
                'image' => $article->cover_image
                    ? (
                        str_starts_with(
                            $article->cover_image,
                            'http://'
                        )
                        || str_starts_with(
                            $article->cover_image,
                            'https://'
                        )
                            ? $article->cover_image
                            : asset(
                                'storage/' .
                                ltrim($article->cover_image, '/')
                            )
                    )
                    : 'https://placehold.co/900x720?text=Edukasi+Betawi',
            ])
            ->values();

        return Inertia::render('welcome', [
            'products' => $products,
            'educationArticles' => $educationArticles,
        ]);
    }

    /**
     * Menampilkan detail satu produk berdasarkan slug.
     */
    public function show(string $slug): Response
    {
        $product = Product::query()
            ->with('category:id,name')
            ->where('is_active', true)
            ->where('slug', $slug)
            ->firstOrFail([
                'id',
                'category_id',
                'name',
                'slug',
                'description',
                'price',
                'stock',
                'image',
            ]);

        return Inertia::render('products/show', [
            'product' => $product,
        ]);
    }
}
