from flask import Flask, render_template, jsonify, request
from find_info import get_name_info_xlsx
app = Flask(__name__, template_folder="./static/html")

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

@app.route("/api/names/<name>")
def json_names(name):
    return get_name_info_xlsx(name)



if __name__ == '__main__':
    app.run(debug=True)
