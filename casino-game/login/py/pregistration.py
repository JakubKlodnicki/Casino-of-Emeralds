import mysql.connector
import sys


a = sys.argv[1:]
for i in range(len(a)):
    f = a[i]
    f = f.split()
    break
email = '"' + f[0]
email = email + '"'
login = f[1]
login = '"' + login
login = login + '"'
password = '"' + f[2]
password = password + '"'




srch = 'INSERT INTO users (user_email, user_login, user_password) VALUES (%s, %s, %s)' % (email, login, password)



cnx = mysql.connector.connect(user='***', passwd='***',
                            host='localhost',
                            database='***')
mycursor = cnx.cursor();
mycursor.execute(srch)
result = mycursor.fetchall()
cnx.commit()
cnx.close()
