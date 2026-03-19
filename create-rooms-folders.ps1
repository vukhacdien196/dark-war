# Create room folders structure
$basePath = "public/rooms"
$categories = @("bathroom", "living", "kitchen", "bedroom", "outdoor", "other")
$types = @("samples", "designed")

Write-Host "Creating room folders structure..."

# Create base folder
New-Item -ItemType Directory -Path $basePath -Force

# Create category folders
foreach ($category in $categories) {
    $categoryPath = "$basePath/$category"
    New-Item -ItemType Directory -Path $categoryPath -Force
    
    # Create type folders for each category
    foreach ($type in $types) {
        $typePath = "$categoryPath/$type"
        New-Item -ItemType Directory -Path $typePath -Force
    }
}

# Create mixed folder for "all" category
New-Item -ItemType Directory -Path "$basePath/mixed" -Force

Write-Host "Folder structure created successfully!"
Write-Host "You can now upload your room images to the appropriate folders."
Write-Host ""
Write-Host "Folder structure:"
Write-Host "public/rooms/"
foreach ($category in $categories) {
    Write-Host "  $category/"
    foreach ($type in $types) {
        Write-Host "    $type/"
    }
}
Write-Host "  mixed/"
Write-Host ""
Write-Host "Ready to upload images!"
