<?php
    $username = 'u1943405_yama';
    $password = 'Avt1732177';
    $db = 'u1943405_yamatests';
    $host = 'localhost';

    try {
        $dsn = 'mysql:host=' . $host . ';dbname=' . $db . ';charset=utf8;';
        $database = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }