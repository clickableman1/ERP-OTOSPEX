<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Eloquent\BaseRepository;
use App\Repositories\EloquentRepositoryInterface;

use App\Repositories\UsersRepositoryInterface;
use App\Repositories\Eloquent\UsersRepository;
use App\Repositories\TesttableRepositoryInterface;
use App\Repositories\Eloquent\TesttableRepository;
use App\Repositories\RolesRepositoryInterface;
use App\Repositories\Eloquent\RolesRepository;
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

        $this->app->bind(TesttableRepositoryInterface::class, TesttableRepository::class);

        $this->app->bind(RolesRepositoryInterface::class, RolesRepository::class);
        $this->app->bind(FilesRepositoryInterface::class, FilesRepository::class);
    }
}

