<?php
$WeatherSource = "https://api.forecast.io/forecast/8c59eaa35cc09f8f8e8c37940bf23e3d/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>
