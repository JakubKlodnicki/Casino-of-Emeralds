import mysql.connector
import sys


a = sys.argv[1:]
for i in range(len(a)):
    f = a[i]
    f = f.split()
    break
if len(f) != 3:
   print('<script>window.location.href = "./registration.php?err=1"</script>')
eml = f[0]
email = '"' + f[0]
email = email + '"'
lgn = f[1]
login = f[1]
login = '"' + login
login = login + '"'
password = '"' + f[2]
password = password + '"'
g = 0




srch = 'INSERT INTO users (user_email, user_login, user_password) VALUES (%s, %s, %s)' % (email, login, password)
all = 'SELECT * FROM users'


cnx = mysql.connector.connect(user='***', passwd='***',
                            host='localhost',
                            database='***')
mycursor = cnx.cursor()
mycursor.execute(all)
rslt = mycursor.fetchall()
for i in rslt:
   if eml in i:
      print('<script>window.location.href = "./registration.php?err=2"</script>')
      g += 1
   elif lgn in i and g != 1:
      print('<script>window.location.href = "./registration.php?err=3"</script>') 
   else:
      print('<button><a href="./login.php">Log in</a></button>')
      mycursor.execute(srch)
      result = mycursor.fetchall()
      print('Created succesfully')
      cnx.commit()
cnx.close()
