<php?
    
    $tables = [ "tbl_categories", "tbl_attractions", "tbl_keywords", "tbl_users" ];

    $mysqli = new mysqli("localhost","root","","db_ontariosummer");

    if ($mysqli->connect_errno) {
        die("connection error " . $mysqli -> connect_error);
    }

    function writeFile($table) {
        $query = $mysqli->prepare("SELECT * FROM " . $table);
        $query->execute();
        $result = $query->get_result();
        echo $result;
        $file = json_encode($result));
        echo $file;
        file_put_contents("/admin/" . $table . ".txt", $result);
    }

    for ($i = 0; i < 4; i++) {
        writeFile($tables[i]);
    }
    
    mysqli_close($connection);



?>