# Fix: Admin Login Method Not Allowed Error

## The Problem
You're getting: `The POST method is not supported for route admin/login. Supported methods: GET, HEAD.`

This means Filament's routes aren't properly registered or the route cache is stale.

## Solution: Clear Route Cache on Server

Since you don't have SSH access, you need to clear the route cache via FileZilla or cPanel.

### Option 1: Delete Route Cache Files (Recommended)

1. **Connect via FileZilla**
2. **Navigate to:** `bootstrap/cache/`
3. **Delete these files if they exist:**
   - `routes-v7.php` (or any `routes-*.php` file)
   - `config.php`
   - `services.php`
   - `packages.php`
   - `events.php`

4. **Refresh your website** - The routes will be regenerated automatically

### Option 2: Create a Clear Cache Script

Create a file `public/clear-cache.php` on your server:

```php
<?php
// Clear all Laravel caches
if (file_exists(__DIR__ . '/../bootstrap/cache/routes-v7.php')) {
    unlink(__DIR__ . '/../bootstrap/cache/routes-v7.php');
}
if (file_exists(__DIR__ . '/../bootstrap/cache/config.php')) {
    unlink(__DIR__ . '/../bootstrap/cache/config.php');
}
if (file_exists(__DIR__ . '/../bootstrap/cache/services.php')) {
    unlink(__DIR__ . '/../bootstrap/cache/services.php');
}

// Clear storage cache
$cacheDir = __DIR__ . '/../storage/framework/cache/data';
if (is_dir($cacheDir)) {
    $files = glob($cacheDir . '/*');
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }
}

echo "✅ Cache cleared successfully!<br>";
echo "You can now <a href='/admin/login'>try logging in again</a>.<br>";
echo "<strong>IMPORTANT:</strong> Delete this file (clear-cache.php) after use for security!";
```

1. **Upload this file** to `public/clear-cache.php` via FileZilla
2. **Visit:** `https://ibn-alqayyim.rkmait.com/clear-cache.php`
3. **Delete the file** after use for security

### Option 3: Use cPanel Terminal (if available)

If your hosting has cPanel Terminal:

```bash
cd /path/to/your/project
php artisan route:clear
php artisan config:clear
php artisan cache:clear
```

## Verify Filament is Registered

Make sure `app/Providers/Filament/AdminPanelProvider.php` exists and is registered.

Check `bootstrap/providers.php` - it should include:
```php
App\Providers\Filament\AdminPanelProvider::class,
```

If not, add it.

## After Clearing Cache

1. **Try logging in again** at `https://ibn-alqayyim.rkmait.com/admin/login`
2. **The POST method should now work**

## Why This Happens

Laravel caches routes for performance. When you upload files, the cached routes might be from an old version that doesn't include Filament's POST routes. Clearing the cache forces Laravel to regenerate routes from your current code.

## Prevention

After making any route changes, always clear the route cache:
- Delete `bootstrap/cache/routes-*.php`
- Or run `php artisan route:clear` (if you have SSH)

