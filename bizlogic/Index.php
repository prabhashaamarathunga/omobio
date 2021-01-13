<?php

    session_start();

    $id ="";
    $name="";
    $username = "";
    $email = "";
    $errors = array();  

    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'root');
    define('DB_PASSWORD', '1234');
    define('DB_DATABASE', 'Exam');

    $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);


//Login
   if(isset($_POST['login_user'])) {
      $username = mysqli_real_escape_string($db, $_POST['username']);
      $password = mysqli_real_escape_string($db, $_POST['password']);
  
      if(empty($username)) {array_push($errors, "Username is required");}
      if(empty($password)) {array_push($errors, "Password is required");}
  
      if(count($errors) == 0){
          $password = md5($password);
          $query = "SELECT * FROM user WHERE username='$username' AND password='$password' ";
          $results = mysqli_query($db, $query);
  
  
          if(mysqli_num_rows($results)){
  
              $_SESSION['username'] = $username;
              $_SESSION['success'] = "Logged in successfully";
          
          }else{
              array_push($errors, "Login Error");
          }
      
      }
      
  }

  //ListView

  $query = "SELECT id, name, username, email FROM User";
  $results = mysqli_query($db, $query);

  while($row = mysqli_fetch_array($results, MYSQLI_ASSOC)) {
    $id = mysqli_real_escape_string($db, $_GET['username']);
    $name = mysqli_real_escape_string($db, $_GET['username']);
    $username = mysqli_real_escape_string($db, $_GET['username']);
    $email = mysqli_real_escape_string($db, $_GET['email']);
  }


?>