<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DataproviderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/company', [CompanyController::class, 'index'])->name('company.index');
    // Route::get('/company/search{query}', [CompanyController::class, 'search'])->name('company.search');
    Route::get('/company/{company}', [CompanyController::class, 'edit'])->name('company.edit');
    Route::get('/company/quote/{company}', [CompanyController::class, 'quote'])->name('company.quote');
    Route::patch('/company/{company}', [CompanyController::class, 'update'])->name('company.update');

    Route::get('/dataprovider', [DataproviderController::class, 'edit'])->name('dataprovider.edit');
    Route::patch('/dataprovider/{provider_}', [DataproviderController::class, 'update'])->name('dataprovider.update');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
