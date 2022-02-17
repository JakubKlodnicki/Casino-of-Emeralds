import mysql.connector
import sys

a = sys.argv[1:]
for i in range(len(a)):
    f = a[i]
    f = f.split()
    break
if len(f) != 2:
   print('<script>window.location.href = "./login.php?err=1"</script>')
login = '"' + f[0]
login = login + '"'
password = f[1]
password = '"' + password
password = password + '"'

srch = 'SELECT * FROM users WHERE user_login = %s AND user_password = %s' % (login, password)

cnx = mysql.connector.connect(user='***', passwd='***',
                            host='localhost',
                            database='***')
mycursor = cnx.cursor();
mycursor.execute(srch)
result = mycursor.fetchall()
if result:
   print('<button><a href="./login.php">Log out</a></button><br>')
   for i in range(len(result)):
      print(*result[i])
else:
   print('<script>window.location.href = "./login.php?err=1"</script>')
cnx.close()
