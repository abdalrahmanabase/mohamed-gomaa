<?php
/**
 * Create Storage Symlink Script
 * 
 * IMPORTANT: Delete this file after use for security!
 * Upload to: public/create-symlink.php
 * Visit: https://ibn-alqayyim.rkmait.com/create-symlink.php
 */

$target = __DIR__ . '/../storage/app/public';
$link = __DIR__ . '/storage';

// Check if target directory exists
if (!is_dir($target)) {
    // Try to create it
    if (!mkdir($target, 0755, true)) {
        die("❌ Error: Cannot create target directory: $target<br>Please create it manually via FileZilla.");
    }
}

// Remove existing link/folder if it exists
if (file_exists($link)) {
    if (is_link($link)) {
        unlink($link);
        $action = "Removed existing symlink";
    } elseif (is_dir($link)) {
        // Try to remove directory (only if empty)
        if (count(scandir($link)) == 2) { // . and ..
            rmdir($link);
            $action = "Removed existing empty directory";
        } else {
            die("❌ Error: '$link' exists and is not empty. Please delete it manually via FileZilla and try again.");
        }
    } else {
        unlink($link);
        $action = "Removed existing file";
    }
} else {
    $action = "No existing link found";
}

// Create symlink
if (symlink($target, $link)) {
    $success = true;
    $message = "✅ Storage symlink created successfully!";
} else {
    $success = false;
    $message = "❌ Failed to create symlink. You may need to create it manually via FileZilla or cPanel.";
}

?>
<!DOCTYPE html>
<html>
<head>
    <title>Create Storage Symlink</title>
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
        .error {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .info {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            color: #0c5460;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .warning {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
        code {
            background: #f4f4f4;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: monospace;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            padding: 5px 0;
        }
        li:before {
            content: "• ";
            color: #007bff;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <?php if ($success): ?>
        <div class="success">
            <h2><?php echo $message; ?></h2>
            <p><strong>Action taken:</strong> <?php echo $action; ?></p>
            <ul>
                <li><strong>Symlink:</strong> <code><?php echo htmlspecialchars($link); ?></code></li>
                <li><strong>Target:</strong> <code><?php echo htmlspecialchars($target); ?></code></li>
            </ul>
            <p>You can now try uploading images in Filament admin panel.</p>
        </div>
    <?php else: ?>
        <div class="error">
            <h2><?php echo $message; ?></h2>
            <p><strong>Action taken:</strong> <?php echo $action; ?></p>
        </div>
        
        <div class="info">
            <h3>Manual Instructions:</h3>
            <ol>
                <li>Connect via FileZilla</li>
                <li>Navigate to <code>public/</code> directory</li>
                <li>Delete <code>storage</code> folder if it exists (and is not a symlink)</li>
                <li>Create a symlink named <code>storage</code> pointing to <code>../storage/app/public</code></li>
            </ol>
        </div>
    <?php endif; ?>
    
    <div class="warning">
        <strong>⚠️ SECURITY WARNING:</strong><br>
        Please delete this file (<code>public/create-symlink.php</code>) immediately after use!
    </div>
</body>
</html>

