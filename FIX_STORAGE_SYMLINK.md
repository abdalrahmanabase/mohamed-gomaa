# Fix: Storage Folder Should Be a Symlink

## The Problem

You have a regular `storage` folder inside `public/` that was uploaded. This should be a **symlink** pointing to `storage/app/public/`, not a regular folder.

## Why This Matters

- Laravel expects `public/storage` to be a symlink to `storage/app/public`
- Files should be stored in `storage/app/public/` and accessed via the symlink
- Having a regular folder breaks the proper file storage structure

## Solution

### Step 1: Move Existing Files (if any)

If you have files in `public/storage/`, you need to move them to the correct location:

1. **Via FileZilla:**
   - Check what's in `public/storage/` (you mentioned `info-cards/` folder)
   - Move those files to `storage/app/public/` (create directories if needed)
   - For example: `public/storage/info-cards/*` → `storage/app/public/info-cards/*`

### Step 2: Delete the Regular Folder

1. **Via FileZilla:**
   - Navigate to `public/` directory
   - Delete the `storage` folder (it's a regular folder, not a symlink)

### Step 3: Create the Symlink

**Option A: Use the Script (Easiest)**

1. Upload `public/create-symlink.php` to your server (if not already there)
2. Visit: `https://ibn-alqayyim.rkmait.com/create-symlink.php`
3. It will create the symlink automatically
4. Delete the script file after use

**Option B: Manual via FileZilla**

1. In FileZilla, navigate to `public/` directory
2. Right-click → Create Symbolic Link (or similar option)
3. Link name: `storage`
4. Target: `../storage/app/public`

**Option C: Via cPanel File Manager**

1. Log into cPanel
2. Go to File Manager
3. Navigate to `public/` directory
4. Click "Create Symbolic Link"
5. Link name: `storage`
6. Target: `../storage/app/public`

### Step 4: Verify

After creating the symlink:

1. Check that `public/storage` is now a symlink (it should show as a link in FileZilla)
2. Verify files are accessible at: `https://ibn-alqayyim.rkmait.com/storage/info-cards/filename.jpg`
3. Try uploading a new image in Filament - it should save correctly

## Important Notes

- **Don't upload the `public/storage` folder** - it should be created as a symlink on the server
- Files should be in `storage/app/public/`, not `public/storage/`
- The symlink allows Laravel to serve files from `storage/app/public/` via the `public/storage/` URL

## After Fixing

Once the symlink is created:
- New uploads will save to `storage/app/public/info-cards/` or `storage/app/public/reviews/`
- Files will be accessible via `https://ibn-alqayyim.rkmait.com/storage/info-cards/filename.jpg`
- Image uploads in Filament will work correctly

