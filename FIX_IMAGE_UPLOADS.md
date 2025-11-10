# Fix: Images Not Saving

## The Problem
Images are not being saved when uploading through Filament admin panel.

## Common Causes

1. **Storage symlink doesn't exist** - `public/storage` → `storage/app/public`
2. **File permissions are wrong** - `storage/app/public` needs to be writable
3. **Disk not specified** - FileUpload components need explicit disk configuration

## Solution

### Step 1: Create Storage Symlink

The symlink `public/storage` must point to `storage/app/public`.

**Option A: Via FileZilla (Manual)**

1. Connect via FileZilla
2. Navigate to `public/` directory
3. Check if `storage` folder/symlink exists
4. If it doesn't exist or is a regular folder:
   - Delete it if it's a regular folder
   - Create a symlink named `storage` pointing to `../storage/app/public`

**Option B: Via cPanel File Manager**

1. Log into cPanel
2. Go to File Manager
3. Navigate to `public/` directory
4. Click "Create Symbolic Link"
5. Link name: `storage`
6. Target: `../storage/app/public`

**Option C: Create a PHP Script (Easiest)**

Create a file `public/create-symlink.php`:

```php
<?php
$target = __DIR__ . '/../storage/app/public';
$link = __DIR__ . '/storage';

// Remove existing link/folder if it exists
if (file_exists($link)) {
    if (is_link($link)) {
        unlink($link);
    } else {
        rmdir($link);
    }
}

// Create symlink
if (symlink($target, $link)) {
    echo "✅ Storage symlink created successfully!<br>";
    echo "Link: <code>$link</code><br>";
    echo "Target: <code>$target</code><br>";
    echo "<strong>IMPORTANT:</strong> Delete this file (create-symlink.php) after use!";
} else {
    echo "❌ Failed to create symlink. You may need to create it manually via FileZilla or cPanel.";
}
```

1. Upload to `public/create-symlink.php`
2. Visit: `https://ibn-alqayyim.rkmait.com/create-symlink.php`
3. Delete the file after use

### Step 2: Set File Permissions

1. **Via FileZilla:**
   - Right-click `storage/app/public/` → File Permissions → Set to **755**
   - Right-click `storage/app/public/info-cards/` → Set to **755** (create if doesn't exist)
   - Right-click `storage/app/public/reviews/` → Set to **755** (create if doesn't exist)

2. **Create directories if missing:**
   - `storage/app/public/info-cards/`
   - `storage/app/public/reviews/`

### Step 3: Upload Updated Files

I've updated the FileUpload components to explicitly use the 'public' disk:

- `app/Filament/Resources/InfoCardResource.php` - Added `->disk('public')`
- `app/Filament/Resources/ReviewResource.php` - Added `->disk('public')`

Upload these files to your server.

### Step 4: Verify

1. Try uploading an image in Filament
2. Check if file appears in `storage/app/public/info-cards/` or `storage/app/public/reviews/`
3. Check if image is accessible at `https://ibn-alqayyim.rkmait.com/storage/info-cards/filename.jpg`

## Quick Checklist

- [ ] Storage symlink exists: `public/storage` → `storage/app/public`
- [ ] Permissions set: `storage/app/public/` = 755
- [ ] Directories exist: `storage/app/public/info-cards/` and `storage/app/public/reviews/`
- [ ] Updated Resource files uploaded
- [ ] Test image upload

## Troubleshooting

### If images still don't save:

1. **Check error logs:**
   - Download `storage/logs/laravel.log` from server
   - Look for file upload errors

2. **Check PHP upload settings:**
   - `upload_max_filesize` should be at least 10M
   - `post_max_size` should be at least 10M
   - `memory_limit` should be at least 128M

3. **Verify disk configuration:**
   - Check `config/filesystems.php` - `public` disk should point to `storage/app/public`

4. **Test file permissions:**
   - Try creating a test file in `storage/app/public/` via FileZilla
   - If you can't create files, permissions are wrong

## After Fixing

Once the symlink is created and permissions are set, images should save correctly. The updated Resource files ensure Filament uses the correct disk for uploads.

