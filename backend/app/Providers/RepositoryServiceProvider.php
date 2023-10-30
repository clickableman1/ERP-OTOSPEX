<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Eloquent\BaseRepository;
use App\Repositories\EloquentRepositoryInterface;

use App\Repositories\UsersRepositoryInterface;
use App\Repositories\Eloquent\UsersRepository;
use App\Repositories\SuppliersRepositoryInterface;
use App\Repositories\Eloquent\SuppliersRepository;
use App\Repositories\InvoicesRepositoryInterface;
use App\Repositories\Eloquent\InvoicesRepository;
use App\Repositories\SettingsRepositoryInterface;
use App\Repositories\Eloquent\SettingsRepository;
use App\Repositories\OrdersRepositoryInterface;
use App\Repositories\Eloquent\OrdersRepository;
use App\Repositories\Order_detailsRepositoryInterface;
use App\Repositories\Eloquent\Order_detailsRepository;
use App\Repositories\Purchase_ordersRepositoryInterface;
use App\Repositories\Eloquent\Purchase_ordersRepository;
use App\Repositories\Sale_ordersRepositoryInterface;
use App\Repositories\Eloquent\Sale_ordersRepository;
use App\Repositories\PartsRepositoryInterface;
use App\Repositories\Eloquent\PartsRepository;
use App\Repositories\StocksRepositoryInterface;
use App\Repositories\Eloquent\StocksRepository;
use App\Repositories\ServicesRepositoryInterface;
use App\Repositories\Eloquent\ServicesRepository;
use App\Repositories\Service_ordersRepositoryInterface;
use App\Repositories\Eloquent\Service_ordersRepository;
use App\Repositories\Vehicle_part_servicesRepositoryInterface;
use App\Repositories\Eloquent\Vehicle_part_servicesRepository;
use App\Repositories\PermissionsRepositoryInterface;
use App\Repositories\Eloquent\PermissionsRepository;
use App\Repositories\FilesRepositoryInterface;
use App\Repositories\Eloquent\FilesRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);

        $this->app->bind(UsersRepositoryInterface::class, UsersRepository::class);

        $this->app->bind(SuppliersRepositoryInterface::class, SuppliersRepository::class);

        $this->app->bind(InvoicesRepositoryInterface::class, InvoicesRepository::class);

        $this->app->bind(SettingsRepositoryInterface::class, SettingsRepository::class);

        $this->app->bind(OrdersRepositoryInterface::class, OrdersRepository::class);

        $this->app->bind(Order_detailsRepositoryInterface::class, Order_detailsRepository::class);

        $this->app->bind(Purchase_ordersRepositoryInterface::class, Purchase_ordersRepository::class);

        $this->app->bind(Sale_ordersRepositoryInterface::class, Sale_ordersRepository::class);

        $this->app->bind(PartsRepositoryInterface::class, PartsRepository::class);

        $this->app->bind(StocksRepositoryInterface::class, StocksRepository::class);

        $this->app->bind(ServicesRepositoryInterface::class, ServicesRepository::class);

        $this->app->bind(Service_ordersRepositoryInterface::class, Service_ordersRepository::class);

        $this->app->bind(Vehicle_part_servicesRepositoryInterface::class, Vehicle_part_servicesRepository::class);

        $this->app->bind(PermissionsRepositoryInterface::class, PermissionsRepository::class);
        $this->app->bind(FilesRepositoryInterface::class, FilesRepository::class);
    }
}

