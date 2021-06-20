from logging import debug
from flask import Flask, render_template
app = Flask(__name__)

darth = {
    'vida': 100,
    'ataque': 50,
    'def': 40
}
grievous = {
    'vida': 100,
    'ataque': 50,
    'def': 90
}
ashoka = {
    'vida': 100,
    'ataque': 30,
    'def': 100
}
boba = {
    'vida': 100,
    'ataque': 60,
    'def': 50
}
weapons = {
    'lightsaber': 5,
    'force': 3,
    'pistol': 2
}

@app.route('/')
def home():
    return render_template('index.html', darth=darth, grievous=grievous, ashoka=ashoka, boba=boba, weapons=weapons)


if __name__ == '__main__':
    app.run(debug=True)