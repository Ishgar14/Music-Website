<?php
    
    // Database connection configurations
    $host = 'localhost';
    $DB_user = 'root';
    $DB_passwd = '12345';

    $con = mysqli_connect($host, $DB_user, $DB_passwd, "wtmusic");

    if (!$con) {
        die("Error connecting to database: " . mysqli_connect_error());
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $username = $_POST['username'];
        $DOB = $_POST['DOB'];

        // echo $email . '\n';
        // echo $password . '\n';
        // echo $username . '\n';
        // echo $DOB . '\n';
    }

    $query = 'INSERT INTO users (firstname, lastname, email, password, username, DOB) values(null, null, ' . 
        '"'. $email . '",' .
        '"'. $password . '",' .
        '"'. $username . '",' .
        '"'. $DOB . '"' .
        ')';

    // echo $query;
    $result = mysqli_query($con, $query);

    if(!$result) {
        echo "There was some error while inserting the data: " . mysqli_error($con);
    }
    else {
        echo "You have been registered on our website!";
    }
?>