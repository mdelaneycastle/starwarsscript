<?php
$directory = './Images/';
$files = array_diff(scandir($directory), array('..', '.')); // Exclude . and ..
$imageFiles = array_filter($files, function($file) use ($directory) {
    $ext = pathinfo($file, PATHINFO_EXTENSION);
    return in_array(strtolower($ext), ['png', 'jpg', 'jpeg', 'gif']);
});
echo json_encode(array_values($imageFiles));
?>
