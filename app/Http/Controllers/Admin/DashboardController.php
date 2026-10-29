<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CustomRequest;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'total_products' => Product::count(),
            'active_products' => Product::where('is_active', true)->count(),
            'total_categories' => Category::count(),
            'total_requests' => CustomRequest::count(),
        ];

        $latestProducts = Product::query()
            ->with('category:id,name')
            ->latest()
            ->limit(5)
            ->get([
                'id',
                'category_id',
                'name',
                'slug',
                'price',
                'stock',
                'is_active',
                'created_at',
            ]);

        return Inertia::render('dashboard', [
            'stats' => $stats,
            'latestProducts' => $latestProducts,
        ]);
    }
}