# STACK Server: Implemented via Flask

from config import HOST, STACK_PORT
from flask import Flask, render_template, request

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route('/')
def index():
    """
    Render the HTML page when navigated to http://localhost:8081
    """
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(host=HOST, port=STACK_PORT, debug=True)
