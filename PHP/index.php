<?php
    # basic display
    // echo "helo";

    # variable creation
    // $a = 1;
    // $b = 1.1;
    // $c = false;
    // $d = "helo";
    // $e = null;
    // $arr = [1, 2, 3, 4, "rodi"];
    // $assoc_arr = ["0" => "rodi", "age" => 12];
    // $arr2 = array(1, 2, 3, true, "bodi");
    // $assoc_arr2 = array("0" => 123, "bb" => true);
    // echo var_dump($arr), var_dump($assoc_arr), $assoc_arr["age"], $assoc_arr["0"], $arr[4];

    # string functions
    // $str = "hlo helo heelo heeelo";
    // $split_arr = explode(" ", $str);
    // $len = strlen($str);
    // $rev = strrev($str);
    // $trim = trim($str);
    // $upper = strtoupper($str);
    // $concat = $str . $str;
    // $concat2 = "$str . . . $str";
    // $wc = str_word_count($str);
    // $strfirstpos = strpos($str, "heee");
    // $str_rep = str_replace("heee", "heeeeeee", $str);
    // echo $str, var_dump($split_arr), $len, $rev, $trim, $upper, $concat, $concat2, $wc, $strfirstpos, $str_rep;

    # constant
    // define("PI", 3.14);
    // echo PI;

    # string tags rendered as html
    // echo "<h1>Heading lol</h1>"

    # array functions
    // $arr = ["lol", "heee", "wow", "123", 123, "true", true];
    // array_push($arr, "donkey");
    // $arr[count($arr)+2] = "monkey";
    // array_splice($arr, 4, count($arr));
    // array_shift($arr);
    // array_pop($arr);
    // sort($arr);
    // rsort($arr);
    // asort($arr);
    // ksort($arr);
    // arsort($arr);
    // krsort($arr);
    // $arr_multi = [[1, 2], ["soham"]];
    // echo var_dump($arr_multi);
    // echo var_dump($arr_multi[1][0]);

    # min-max
    // min($arr);
    // min(1, 23, ...);
    // same for max;

    # request handling
    // $all_req_info = $_SERVER; # _server contains all info, you echo it and see what u want in it
    // $url = $_SERVER["REQUEST_URI"];
    // $username = $_GET["username"];
    // $password = $_GET["password"];
    // echo $username, " ", $password, " ", $url;

    # file handling
    // include 'connection.php';
    // $file = fopen("index.html", "r");
    // echo fread($file, filesize("index.html"));
    // fwrite($file, "Hi");
    // fclose($file);

    # mysql connection and main code
    $connection = mysqli_connect("localhost", "root", "9997", "practice", 3306);
    $result = mysqli_query($connection, "SELECT * FROM `bill-costs`"); // names must be in `` quote
    $result = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // $response = json_encode($result);

    $units = $_POST["units"];
    
    $cost = 0;
    if($units > 250) {
        $cost += (19)*($units - 250);
        $units -= ($units - 250);
    }
    if($units > 150) {
        $cost += 8*($units - 150);
        $units -= ($units - 150);
    }
    if($units > 50) {
        $cost += 6*($units - 50);
        $units -= ($units - 50);
    }
    $cost += $units * $result[0]["cost-above-threshold"];
    
    header("Content-Type", "application/json");
    echo json_encode(["cost" => $cost]);
?>