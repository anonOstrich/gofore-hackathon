from flask import Flask, render_template, jsonify
app = Flask(__name__, template_folder="./frontend/build")

notes = [
    {
        "title": "Title",
        "content": "Content",
        "author": "Author",
    },
    {
        "title": "Title",
        "content": "Content",
        "author": "Author",
    },
]


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/notes")
def json_notes():
    return jsonify(notes)


if __name__ == '__main__':
    app.run(debug=True)
