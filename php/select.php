<?php
    require 'config.php';

    $comm = $_POST['comm'];

    if ($comm == 'start') {
        $query = $database->query("SELECT * FROM `tasks` ORDER BY `created_at`");
        $resultsList = [];
        while ($row = $query->fetch(PDO::FETCH_OBJ)) {
            array_push($resultsList,
                ['id' => $row->id, 'task' => $row->task, 'isDone' => $row->is_done]);
        }

        echo json_encode($resultsList);
    } elseif ($comm == '') {
        //
    }




    $database = null;