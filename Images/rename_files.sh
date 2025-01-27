#!/bin/bash

# Check if folder path is provided
if [ -z "$1" ]; then
    echo "Usage: $0 /Users/appleone/Downloads/starwarsscript-main 3/Images"
    exit 1
fi

# Navigate to the specified folder
cd "$1" || { echo "Folder not found"; exit 1; }

# Rename files
for file in *_1.jpg; do
    prefix="${file:0:2}"                   # Extract the first two digits
    base="${file:2:-6}"                    # Extract the rest of the filename minus '_1.jpg'
    new_name="${base}_${prefix}.jpg"       # Combine the parts into the new name
    mv "$file" "$new_name"                 # Rename the file
    echo "Renamed: $file -> $new_name"     # Print confirmation
done

echo "All files have been renamed."
