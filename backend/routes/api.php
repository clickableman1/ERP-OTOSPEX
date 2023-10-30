<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UsersController;
use App\Http\Controllers\Api\SuppliersController;
use App\Http\Controllers\Api\InvoicesController;
use App\Http\Controllers\Api\SettingsController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\Api\Order_detailsController;
use App\Http\Controllers\Api\Purchase_ordersController;
use App\Http\Controllers\Api\Sale_ordersController;
use App\Http\Controllers\Api\PartsController;
use App\Http\Controllers\Api\StocksController;
use App\Http\Controllers\Api\ServicesController;
use App\Http\Controllers\Api\Service_ordersController;
use App\Http\Controllers\Api\Vehicle_part_servicesController;
use App\Http\Controllers\Api\PermissionsController;
use App\Http\Controllers\Api\FilesController;

Route::get('analytics', fn() => Storage::disk('local')->get('analytics.json'))->middleware('auth:api');

Route::post('file/upload/{table}/{column}', [FilesController::class, 'uploadFile']);
Route::get('file/download', [FilesController::class, 'download']);

Route::get('/email/verify/{id}/{hash}', [UsersController::class, 'verifyEmail'])
    ->middleware(['signed'])->name('verification.verify');

Route::group([
    'middleware' => 'auth:api',
], function() {

    Route::get('users/autocomplete', [UsersController::class, 'findAllAutocomplete']);
    Route::get('users/count', [UsersController::class, 'count']);
    Route::resource('users', UsersController::class);

    Route::get('suppliers/autocomplete', [SuppliersController::class, 'findAllAutocomplete']);
    Route::get('suppliers/count', [SuppliersController::class, 'count']);
    Route::resource('suppliers', SuppliersController::class);

    Route::get('invoices/autocomplete', [InvoicesController::class, 'findAllAutocomplete']);
    Route::get('invoices/count', [InvoicesController::class, 'count']);
    Route::resource('invoices', InvoicesController::class);

    Route::get('settings/autocomplete', [SettingsController::class, 'findAllAutocomplete']);
    Route::get('settings/count', [SettingsController::class, 'count']);
    Route::resource('settings', SettingsController::class);

    Route::get('orders/autocomplete', [OrdersController::class, 'findAllAutocomplete']);
    Route::get('orders/count', [OrdersController::class, 'count']);
    Route::resource('orders', OrdersController::class);

    Route::get('order_details/autocomplete', [Order_detailsController::class, 'findAllAutocomplete']);
    Route::get('order_details/count', [Order_detailsController::class, 'count']);
    Route::resource('order_details', Order_detailsController::class);

    Route::get('purchase_orders/autocomplete', [Purchase_ordersController::class, 'findAllAutocomplete']);
    Route::get('purchase_orders/count', [Purchase_ordersController::class, 'count']);
    Route::resource('purchase_orders', Purchase_ordersController::class);

    Route::get('sale_orders/autocomplete', [Sale_ordersController::class, 'findAllAutocomplete']);
    Route::get('sale_orders/count', [Sale_ordersController::class, 'count']);
    Route::resource('sale_orders', Sale_ordersController::class);

    Route::get('parts/autocomplete', [PartsController::class, 'findAllAutocomplete']);
    Route::get('parts/count', [PartsController::class, 'count']);
    Route::resource('parts', PartsController::class);

    Route::get('stocks/autocomplete', [StocksController::class, 'findAllAutocomplete']);
    Route::get('stocks/count', [StocksController::class, 'count']);
    Route::resource('stocks', StocksController::class);

    Route::get('services/autocomplete', [ServicesController::class, 'findAllAutocomplete']);
    Route::get('services/count', [ServicesController::class, 'count']);
    Route::resource('services', ServicesController::class);

    Route::get('service_orders/autocomplete', [Service_ordersController::class, 'findAllAutocomplete']);
    Route::get('service_orders/count', [Service_ordersController::class, 'count']);
    Route::resource('service_orders', Service_ordersController::class);

    Route::get('vehicle_part_services/autocomplete', [Vehicle_part_servicesController::class, 'findAllAutocomplete']);
    Route::get('vehicle_part_services/count', [Vehicle_part_servicesController::class, 'count']);
    Route::resource('vehicle_part_services', Vehicle_part_servicesController::class);

    Route::get('permissions/autocomplete', [PermissionsController::class, 'findAllAutocomplete']);
    Route::get('permissions/count', [PermissionsController::class, 'count']);
    Route::resource('permissions', PermissionsController::class);

});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
], function () {
    Route::any('signin/local', [AuthController::class, 'login'])->name('login');
    Route::put('verify-email', [UsersController::class, 'sendVerifyEmail']);
    Route::get('me', [AuthController::class, 'me']);
    Route::get('signin/google', [UsersController::class, 'signinGoogle']);
    Route::get('google/callback', [UsersController::class, 'callbackGoogle']);
    Route::post('signup', [AuthController::class, 'signup']);
    Route::put('password-update', [AuthController::class, 'passwordUpdate']);
    Route::post('send-password-reset-email', [AuthController::class, 'sendPasswordResetEmail']);
});
