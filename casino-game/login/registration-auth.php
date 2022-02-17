<html>
<head>
<title>Registration</title>

</head>
<body>
<?PHP
  $email = $_POST['email'];
  $login = $_POST['login'];
  $password = $_POST['password'];
  echo shell_exec("/usr/bin/python3 /var/www/html/ok/py/pregistration.py '$email $login $password'");
?>
</body>
</html>
