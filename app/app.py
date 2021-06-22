import os
from flask import Flask,render_template,request

app = Flask(__name__)


@app.route("/")
@app.route("/index")
def index():
  name = request.args.get("name")
  m = request.args.get("m")
  d = request.args.get("d")
  return render_template("index.html",name=name,m=m, d=d)

@app.route("/game/list")
def gamelist():
  return "game_list"

@app.route("/game/ox")
def ox():
  return render_template("marubatsu.html")

if __name__ == "__main__":
  app.run()
  # port = int(os.environ.get("PORT", 5000))
  # app.run(host='0.0.0.0', port=port)