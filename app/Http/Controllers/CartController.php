<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CartController extends Controller
{
    public function index(Request $request): Response
    {
        $cart = $request->session()->get('cart', []);

        $productIds = collect($cart)
            ->pluck('product_id')
            ->filter()
            ->values();

        $products = Product::query()
            ->whereIn('id', $productIds)
            ->get(['id', 'name', 'slug', 'price', 'stock', 'image'])
            ->keyBy(fn (Product $product) => (string) $product->id);

        $items = collect($cart)
            ->map(function (array $item, string $key) use ($products) {
                $product = $products->get((string) ($item['product_id'] ?? $key));

                if (!$product) {
                    return null;
                }

                $quantity = max(1, (int) ($item['quantity'] ?? 1));

                return [
                    'product_id' => $product->id,
                    'name' => $product->name,
                    'slug' => $product->slug,
                    'price' => (float) $product->price,
                    'image' => $product->image,
                    'stock' => (int) $product->stock,
                    'quantity' => $quantity,
                    'subtotal' => (float) $product->price * $quantity,
                ];
            })
            ->filter()
            ->values();

        return Inertia::render('cart/index', [
            'items' => $items,
            'total' => $items->sum('subtotal'),
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
            ],
        ]);
    }

    public function store(Request $request, string $slug): RedirectResponse
    {
        $product = Product::query()
            ->where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        if ($product->stock < 1) {
            return back()->with('error', 'Maaf, stok produk sedang habis.');
        }

        $cart = $request->session()->get('cart', []);
        $productId = (string) $product->id;
        $currentQuantity = (int) ($cart[$productId]['quantity'] ?? 0);

        if ($currentQuantity >= $product->stock) {
            return back()->with(
                'error',
                'Jumlah produk di keranjang sudah mencapai batas stok.'
            );
        }

        $cart[$productId] = [
            'product_id' => $product->id,
            'name' => $product->name,
            'slug' => $product->slug,
            'price' => $product->price,
            'image' => $product->image,
            'quantity' => $currentQuantity + 1,
        ];

        $request->session()->put('cart', $cart);

        return back()->with(
            'success',
            $product->name . ' berhasil ditambahkan ke keranjang.'
        );
    }

    public function increase(Request $request, string $slug): RedirectResponse
    {
        $product = Product::query()
            ->where('slug', $slug)
            ->firstOrFail();

        $cart = $request->session()->get('cart', []);
        $productId = (string) $product->id;

        if (!isset($cart[$productId])) {
            return redirect()
                ->route('cart.index')
                ->with('error', 'Produk tidak ditemukan di keranjang.');
        }

        $quantity = (int) $cart[$productId]['quantity'];

        if ($quantity >= $product->stock) {
            return back()->with(
                'error',
                'Jumlah sudah mencapai batas stok yang tersedia.'
            );
        }

        $cart[$productId]['quantity'] = $quantity + 1;
        $request->session()->put('cart', $cart);

        return back()->with('success', 'Jumlah produk berhasil ditambah.');
    }

    public function decrease(Request $request, string $slug): RedirectResponse
    {
        $product = Product::query()
            ->where('slug', $slug)
            ->firstOrFail();

        $cart = $request->session()->get('cart', []);
        $productId = (string) $product->id;

        if (!isset($cart[$productId])) {
            return redirect()
                ->route('cart.index')
                ->with('error', 'Produk tidak ditemukan di keranjang.');
        }

        $quantity = (int) $cart[$productId]['quantity'];

        if ($quantity <= 1) {
            unset($cart[$productId]);
        } else {
            $cart[$productId]['quantity'] = $quantity - 1;
        }

        $request->session()->put('cart', $cart);

        return back()->with('success', 'Jumlah produk berhasil diperbarui.');
    }

    public function remove(Request $request, string $slug): RedirectResponse
    {
        $product = Product::query()
            ->where('slug', $slug)
            ->firstOrFail();

        $cart = $request->session()->get('cart', []);
        $productId = (string) $product->id;

        if (!isset($cart[$productId])) {
            return redirect()
                ->route('cart.index')
                ->with('error', 'Produk sudah tidak ada di keranjang.');
        }

        unset($cart[$productId]);

        $request->session()->put('cart', $cart);

        return back()->with(
            'success',
            $product->name . ' berhasil dihapus dari keranjang.'
        );
    }
}