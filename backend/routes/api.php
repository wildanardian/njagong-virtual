<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ChatController;

Route::post('/chat/send', [ChatController::class, 'sendMessage']);
Route::get('/chat/sessions', [ChatController::class, 'getSessions']);
Route::get('/chat/sessions/{session_id}', [ChatController::class, 'getSessionMessages']);


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
