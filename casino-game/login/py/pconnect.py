import mysql.connector
import sys

a = sys.argv[1:]
for i in range(len(a)):
    f = a[i]
    f = f.split()
    break
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
for i in range(len(result)):
    print(*result[i])
cnx.close()
