from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)
app.secret_key = 'mykey'

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/entrada')
def entrada():
    return render_template("entrada.html")

@app.route('/entrada/signup', methods = ['GET', 'POST'])
def signup():
    msg = None
    if request.method == 'POST':
        if request.form['name'] != "" or request.form['password'] != "" or request.form['email'] != "":
            email = request.form['email']
            name = request.form['name']
            password = request.form['password']
            conn = sqlite3.connect("database.db")
            c = conn.cursor()
            c.execute("INSERT INTO users VALUES('"+email+"','"+password+"', '"+name+"')")
            conn.commit()
            conn.close()
            msg = 'Dados enviados...'
        else:
            msg = 'Campos não preenchidos corretamente'
    return render_template("signup.html", msg=msg)

@app.route('/entrada/login', methods = ['GET', 'POST'])
def login():
    r = None
    error = None
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        conn = sqlite3.connect("database.db")
        c = conn.cursor()
        c.execute("SELECT * FROM users WHERE email = '"+email+"' and password = '"+password+"'")
        r = c.fetchall()
        for i in r:
            if email == i[0] and password == i[1]:
                return redirect('http://127.0.0.1:5000/organizacao')
        error = 'username ou password incorretos'
        return render_template("login.html", error=error)
    return render_template("login.html", error=error)

@app.route('/organizacao')
def organizacao():
    return render_template("organizacao.html")

@app.route('/organizacao/newatletica', methods = ['GET', 'POST'])
def new_atletica():
    msg = None
    if request.method == 'POST':
        if (request.form['nomeatletica'] == "") or (request.form['curso'] == ""):
            msg = 'Informações obrigatorias faltando serem preenchidas:\nNome da Atlética\nCurso\nDiretor'
        else:
            nome_atletica = request.form['nomeatletica']
            curso = request.form['curso']
            email = request.form['email']
            facebook = request.form['facebook']
            instagram = request.form['instagram']
            twitter = request.form['twitter']
            conn = sqlite3.connect("database.db")
            c = conn.cursor()
            c.execute("INSERT INTO atleticas VALUES('"+nome_atletica+"','"+curso+"', '"+email+"', '"+facebook+"', '"+instagram+"', '"+twitter+"')")
            conn.commit()
            conn.close()
            msg = 'Dados enviados...'
    return render_template("nova_atletica.html", msg=msg)

if __name__=="__main__":
    app.run(debug=True)