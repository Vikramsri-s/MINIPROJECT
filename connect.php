<?php
  $username = $_POST['username'];
  $conn = new mysqli('localhost','root','','carrentalservice');
  if($conn->connect_error){
    die('connection failed : '.$conn->connect_error );

  }else{
    $stmt =$conn->prepare("insert into carrentalservice(username) values(?)");
    $stmt->bind_param("s",$username);
    $stmt->execute();
    echo "registration successfully";
    $stmt->close();
    $conn->close();
  }
?>
