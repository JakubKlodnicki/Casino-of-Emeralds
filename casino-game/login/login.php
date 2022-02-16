<html>
<head>
<title>Logged</title>

</head>
<body>
<button><a href="./login.html">Search again</a></button>
<br>
<?PHP

  $login = $_POST['login'];
  $password = $_POST['password'];
  echo shell_exec("python3 /var/www/html/ok/py/pconnect.py '$login $password'");
?>
</body>
</html>
