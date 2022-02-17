<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
</head>
<body>
  <form action="login-auth.php" method="post">
    Login: <input type="text" name="login" value="" />
    Password: <input type="password" name="password" value="" />

    <input type="submit" name="submit" value="Submit" />
</form>
<br>

<?php
if(!empty($_GET['err'])) {
    echo  "<p style='color: red;'>Incorrect login or password</p>";
}
?>
<a href="./registration.php">Registration</a>

</body>
</html>
