from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
	return render_template("pages/homepage.html")

if __name__ == '__main__':
	app.run()