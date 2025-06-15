<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RecipeController;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/recipe/{id}', [RecipeController::class, 'show']);

Route::post('/ai-generate', [RecipeController::class, 'generate']);

// Route::get('/', function () {
//     return view('welcome');
// });
