import random
import os

from flask import Flask, render_template

app = Flask(
    __name__,
    static_folder = "../frontend/dist",
    template_folder = "../frontend"
)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/img_list")
def img_list():
    return random.choice(get_img_list())


def get_img_list():
    return os.listdir("../frontend/dist/img")


if __name__ == "__main__":
    app.run()
