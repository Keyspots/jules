from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

DATA_PATH = os.path.join(os.path.dirname(__file__), "data", "sample_data.json")
with open(DATA_PATH) as f:
    DATA = json.load(f)


@app.route("/")
def index():
    metrics = list(DATA.keys())
    return render_template("index.html", metrics=metrics)


@app.route("/data/<metric>")
def metric_data(metric: str):
    return jsonify(DATA.get(metric, {}))


if __name__ == "__main__":
    app.run(debug=True)
