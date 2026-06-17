<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && $_POST["id"] != "" && $_POST["quality"] != "" && isset($_POST['button'])) {

    $thumbUrl = "https://img.youtube.com/vi/" . urldecode($_POST["id"]) . "/" . urldecode($_POST["quality"]) . ".jpg";


    $ch = curl_init($thumbUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $downloadImg = curl_exec($ch);
    curl_close($ch);
    header('Content-type: image/jpg');
    header('Content-Disposition: attachment;filename="Yt-Thumbnail.jpg"');

    echo $downloadImg;
    
} else {

    echo "Please Call it with Proper Way.";
}
