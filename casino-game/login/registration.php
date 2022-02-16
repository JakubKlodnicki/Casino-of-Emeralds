<html>
<head>
<title>Registration</title>

</head>
<body>
<button><a href="./login.html">Log in</a></button>
<?PHP
  $email = $_POST['email'];
  $login = $_POST['login'];
  $password = $_POST['password'];
  echo shell_exec("/usr/bin/python3 /var/www/html/ok/py/pregistration.py '$email $login $password'");
?>
</body>
</html>
