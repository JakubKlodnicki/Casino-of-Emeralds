<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registration</title>
</head>
<body>
  <form action="registration-auth.php" method="post">
    E-mail: <input type="email" name="email" value="" />
    Login: <input type="text" name="login" value="" />
    Password: <input type="password" name="password" value="" />

    <input type="submit" name="submit" value="Submit" />
</form>
<?php
if(!empty($_GET['err'])) {
   if($_GET['err'] == 1) {
      echo "<p style='color: red;'>Error: Incorrect values</p>";
   }
   elseif($_GET['err'] == 2) {
      echo "<p style='color: red;'>Error: E-mail already used</p>";
   }
   elseif($_GET['err'] == 3) {
      echo "<p style='color: red;'>Error: Login already used</p>";
   }
}
?>
<br>
<a href="./login.php">Login</a>
</body>
</html>
