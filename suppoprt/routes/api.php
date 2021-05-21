<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/login', [\App\Http\Controllers\AuthController::class, "login"]);
Route::post('/trait', function(){
    return "yo";
});
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);
    Route::post('/images', [\App\Http\Controllers\ImagesController::class, 'store']);
    Route::post('/cards', [\App\Http\Controllers\CardsController::class, 'store']);
    Route::get('/cards', [\App\Http\Controllers\CardsController::class, 'index']);
    Route::post('/account', [\App\Http\Controllers\AccountController::class, 'store']);
    Route::get('/account', [\App\Http\Controllers\AccountController::class, 'index']);
    Route::post('/other', [\App\Http\Controllers\OtherController::class, 'store']);
    Route::get('/other', [\App\Http\Controllers\OtherController::class, 'index']);
});
