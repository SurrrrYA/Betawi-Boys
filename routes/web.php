<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CustomRequestController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ArticleController;

// ==================================================
// HALAMAN UTAMA
// ==================================================

Route::get('/', [ProductController::class, 'index'])
    ->name('home');


// ==================================================
// PRODUK
// ==================================================

// Halaman detail produk
Route::get('/products/{slug}', [ProductController::class, 'show'])
    ->name('products.show');


// ==================================================
// KERANJANG
// ==================================================

// Halaman keranjang
Route::get('/cart', [CartController::class, 'index'])
    ->name('cart.index');

// Tambahkan produk ke keranjang
Route::post('/cart/{slug}', [CartController::class, 'store'])
    ->name('cart.store');

// Tambah jumlah produk
Route::post('/cart/{slug}/increase', [CartController::class, 'increase'])
    ->name('cart.increase');

// Kurangi jumlah produk
Route::post('/cart/{slug}/decrease', [CartController::class, 'decrease'])
    ->name('cart.decrease');

// Hapus produk
Route::post('/cart/{slug}/remove', [CartController::class, 'remove'])
    ->name('cart.remove');


// ==================================================
// ONE PRODUCTION
// ==================================================

// Halaman One Production
Route::get('/one-production', function () {
    return Inertia::render('one-production/index');
})->name('one-production');

// Simpan permintaan produksi
Route::post('/one-production/requests', [CustomRequestController::class, 'store'])
    ->name('one-production.requests.store');


// ==================================================
// EDUKASI BETAWI
// ==================================================

// Halaman daftar artikel edukasi
Route::get('/edukasi-betawi', [EducationController::class, 'index'])
    ->name('education.index');

// Halaman detail artikel edukasi berdasarkan slug
Route::get('/edukasi-betawi/{slug}', [EducationController::class, 'show'])
    ->name('education.show');


// ==================================================
// DASHBOARD
// ==================================================

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');

    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('articles', ArticleController::class)
            ->except(['show']);
    });
});


// ==================================================
// SETTINGS & AUTHENTICATION
// ==================================================

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
