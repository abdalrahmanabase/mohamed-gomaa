<?php
/**
 * Laravel Cache Clear Script
 * 
 * IMPORTANT: Delete this file after use for security!
 * Upload to: public/clear-cache.php
 * Visit: https://ibn-alqayyim.rkmait.com/clear-cache.php
 */

// Security check - remove this in production or add IP restriction
// For now, this is a simple check - DELETE THIS FILE AFTER USE!

$cleared = [];

// Clear route cache
$routeCache = __DIR__ . '/../bootstrap/cache/routes-v7.php';
if (file_exists($routeCache)) {
    unlink($routeCache);
    $cleared[] = 'Route cache';
}

// Clear config cache
$configCache = __DIR__ . '/../bootstrap/cache/config.php';
if (file_exists($configCache)) {
    unlink($configCache);
    $cleared[] = 'Config cache';
}

// Clear services cache
$servicesCache = __DIR__ . '/../bootstrap/cache/services.php';
if (file_exists($servicesCache)) {
    unlink($servicesCache);
    $cleared[] = 'Services cache';
}

// Clear packages cache
$packagesCache = __DIR__ . '/../bootstrap/cache/packages.php';
if (file_exists($packagesCache)) {
    unlink($packagesCache);
    $cleared[] = 'Packages cache';
}

// Clear events cache
$eventsCache = __DIR__ . '/../bootstrap/cache/events.php';
if (file_exists($eventsCache)) {
    unlink($eventsCache);
    $cleared[] = 'Events cache';
}

// Clear application cache
$cacheDir = __DIR__ . '/../storage/framework/cache/data';
if (is_dir($cacheDir)) {
    $files = glob($cacheDir . '/*');
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }
    $cleared[] = 'Application cache';
}

// Clear view cache
$viewsDir = __DIR__ . '/../storage/framework/views';
if (is_dir($viewsDir)) {
    $files = glob($viewsDir . '/*.php');
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }
    $cleared[] = 'View cache';
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Cache Cleared</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #f5f5f5;
        }
        .success {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            padding: 5px 0;
        }
        li:before {
            content: "✅ ";
        }
        a {
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="success">
        <h2>✅ Cache Cleared Successfully!</h2>
        <p>The following caches have been cleared:</p>
        <ul>
            <?php foreach ($cleared as $item): ?>
                <li><?php echo htmlspecialchars($item); ?></li>
            <?php endforeach; ?>
        </ul>
    </div>
    
    <p>
        <a href="/admin/login">Try logging in again →</a>
    </p>
    
    <div class="warning">
        <strong>⚠️ SECURITY WARNING:</strong><br>
        Please delete this file (<code>public/clear-cache.php</code>) immediately after use!
        This file can be used by anyone to clear your cache.
    </div>
</body>
</html>

