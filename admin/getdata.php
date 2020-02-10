<php?

    function get_file($table) {
        $con = mysqli_connect('localhost','root','root','db_ontariosummer');
        if (!$con) {
            die('Could not connect: ' . mysqli_error($con));
        }

        $sql="SELECT * FROM ".table;
        $result = mysqli_query($con,$sql);

        $file = json_encode($result);
        echo $file;

    }

?>