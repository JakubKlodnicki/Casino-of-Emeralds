<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post">
  <input type="email" name="email" placeholder="Email" required value="jon@doe.com"/>
  <input type="password" name="pass" placeholder="Password" required value="12345"/>
  <input type="password" name="cpass" placeholder="Confirm Password" required value="12345"/>
  <input type="submit" value="Go!"/>
</form>

// PHP Script //

<?php
// (B) PROCESS SUBMITTED REGISTRATION FORM
if (isset($_POST["email"])) {
  require "2-user-core.php";
  echo $USR->register($_POST["email"], $_POST["pass"], $_POST["cpass"])
    ? "Check your email and click on the activation link"
    : $USR->error ;
}
?>
</body>
</html>