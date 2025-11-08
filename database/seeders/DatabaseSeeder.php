<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // Use environment variable for password, with fallback only for local development
        $adminPassword = env('ADMIN_PASSWORD', app()->environment('local') ? '11111111' : null);
        
        if (!$adminPassword) {
            throw new \RuntimeException('ADMIN_PASSWORD environment variable must be set in production.');
        }

        User::updateOrCreate(
        ['email' => env('ADMIN_EMAIL', 'superadmin@gmail.com')],
        [
            'name' => env('ADMIN_NAME', 'Abdalrahman Abase'),
            'password' => bcrypt($adminPassword),
        ]
        );

        $this->call([
            ReviewSeeder::class,
        ]);
    }
}
