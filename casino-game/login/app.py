from flask import Flask, render_template, request, redirect, session
from flaskext.mysql import MySQL
from datetime import datetime
import smtplib
from email.mime.text import MIMEText
import string
from random import *

app = Flask(__name__)
app.secret_key = 'Blady2115polska-'

def random_cd():
   characters = '0123456789'
   cd = "".join(choice(characters) for x in range(8))
   return cd

def sentMail(m, message):
   msg = MIMEText(message)
   msg['Subject'] = 'Casino of emeralds - Confirm Account'
   msg['From'] = 'casinoofemeralds@gmail.com'
   msg['To'] = m
   server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
   server.login('casinoofemeralds@gmail.com', 'blady2115polska')
   server.sendmail('casinoofemeralds@gmail.com', m, msg.as_string())
   server.quit()

mysql = MySQL(app)
mysql.init_app(app)

mysql_1 = MySQL(app, prefix='mysql1', host=('localhost'), user=('***'), passwd=('***'), db=('***'), autocommit=True)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/login', methods = ['POST', 'GET'])
def login():
   dt = datetime.now()
   x = dt.strftime('%Y-%m-%d %H:%M:%S.%f')[:-1]
   session['gogol'] = x
   try:
      if session['gogol'] == session['auth']:
         session['aaa'] = 'ok'
      else:
         session['aaa'] = ''
   except:
      session['aaa'] = ''
   if (request.method == 'POST'):
      username1 = request.form.get('username')
      password1 = request.form.get('password')
      username = '"' + username1
      username = username + '"'
      password = '"' + password1
      password = password + '"'
      cursor = mysql_1.get_db().cursor()
      cursor.execute('SELECT * FROM users where user_login = %s and user_password = %s' % (username, password))
      result = cursor.fetchall()
      if result:
         print('TAK KURWA')
         session['auth'] = 1
         session['user'] = username1
         return redirect('/dashboard')
      else:
         dtt = datetime.now()
         xx = dtt.strftime('%Y-%m-%d %H:%M:%S.%f')[:-1]
         session['auth'] = xx
         return redirect('/login')
   else:
      return render_template('login.html')

@app.route('/dashboard')
def dashboard():
   if('user' in session):
      return render_template('dashboard.html')
   return redirect('/login')

@app.route('/logout')
def logout():
   session.pop('user')
   return redirect('/')

@app.route('/register', methods = ['POST', 'GET'])
def register():
  dt = datetime.now()
  x = dt.strftime('%Y-%m-%d %H:%M:%S')
  session['gogol'] = x
  try:
    if session['gogol'] == session['auth']:
      session['aaa'] = 'ok'
      session['aaa'] = 'ok1'
    else:
      session['aaa'] = ''
  except:
    session['aaa'] = ''
  if request.method == 'POST':
    repeats = 0
    email1 = request.form.get('email')
    username1 = request.form.get('username')
    password1 = request.form.get('password')
    if email1 == '' or username1 == '' or password1 == '':
      dtt = datetime.now()
      xx = dtt.strftime('%Y-%m-%d %H:%M:%S')
      session['auth'] = xx
      return redirect('/register')
    email = '"' + email1
    email = email + '"'
    username = '"' + username1
    username = username + '"'
    password = '"' + password1
    password = password + '"'
    cursor = mysql_1.get_db().cursor()
    cursor.execute('SELECT * FROM users where user_login = %s' % (username,))
    result = cursor.fetchall()
    if result:
      repeats += 1
    else:
      cursor.execute('SELECT * FROM users where user_email = %s' % (email,))
      result1 = cursor.fetchall()
      if result1:
        repeats += 1
    if repeats < 1:
      code1 = random_cd()
      code = '"' + code1
      code = code + '"'
      cursor.execute('INSERT INTO users (user_email, user_login, user_password, user_code) VALUES (%s, %s, %s, %s)' % (email, username, password, code))
      session['user'] = username1
      session['auth'] = 1
      session['mail'] = email1
      sentMail(email, code1)

      return redirect('/dashboard')
    else:
      dtt = datetime.now()
      xx = dtt.strftime('%Y-%m-%d %H:%M:%S')
      session['auth'] = xx
      return redirect('/register')
  else:
    return render_template('register.html')

@app.route('/confirm', methods = ['POST', 'GET'])
def confirm():
   try:
      if session['user'] and session['user'] != '':
         user1 = '"' + session['user']
         user1 = user1 + '"'
         cursor1 = mysql_1.get_db().cursor()
         cursor1.execute('SELECT user_activate FROM users where user_login = %s' % (user1,))
         rlst2 = cursor1.fetchall()
         for i in rlst2:
            dd = i
         for i in dd:
            ddd = i
         if ddd == '1':
            return redirect('/dashboard')
   except ValueError:
      return redirect('/login')
   dt = datetime.now()
   x = dt.strftime('%Y-%m-%d %H:%M:%S')
   session['gogol'] = x
   try:
      if session['gogol'] == session['auth']:
         session['aaa'] = 'ok'
      else:
         session['aaa'] = ''
   except:
      session['aaa'] = ''
   if (request.method == 'POST'):
      if session['user']:
         code = request.form.get('code')
         user = session['user']
         user1 = '"' + user
         user1 = user1 + '"'
         if code == '': #bad
            dtt = datetime.now()
            xx = dtt.strftime('%Y-%m-%d %H:%M:%S')
            session['auth'] = xx
            return redirect('/confirm')
         cursor = mysql_1.get_db().cursor()
         cursor.execute('SELECT user_code from users where user_login = %s' % (user1,))
         result = cursor.fetchall()
         if result:
            for i in result:
               f = i
            for i in f:
               x = i
            if code in x:
               cursor.execute('SELECT user_activate from users where user_login = %s' % (user1,))
               result2 = cursor.fetchall()
               for i in result2:
                  ff = i
               for i in ff:
                  xd = i
               if xd == None:
                  cursor.execute('UPDATE users SET user_activate = 1 where user_login = %s' % (user1,))
                  return redirect('/dashboard')
            else: #bad
               dtt = datetime.now()
               xx = dtt.strftime('%Y-%m-%d %H:%M:%S')
               session['auth'] = xx
               return redirect('/confirm')
         else: #bad
            dtt = datetime.now()
            xx = dtt.strftime('%Y-%m-%d %H:%M:%S')
            session['auth'] = xx
            return redirect('/confirm')
      return redirect('/confirm')

   return render_template('confirm.html')


if __name__ == '__main__':
   app.run(debug=True)
