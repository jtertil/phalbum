from flask import Flask, render_template

app = Flask(
    __name__,
    static_folder = "../frontend/dist",
    template_folder = "../frontend"
)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/python")
def hello():
    return "Hello Python!!"


if __name__ == "__main__":
    app.run()

