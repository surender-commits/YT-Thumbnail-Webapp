<?php

$host = "localhost";
$userName = "u485154668_YtThumbCont";
$password = "YtThumbCont@$%123";
$dbName = "u485154668_YtThumbDb";
$tableName = "contactdb";
$tableRows = "name ,email ,sub ,msg ,ip";

// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}
