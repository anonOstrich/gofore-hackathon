from flask import Flask, render_template, jsonify, request
from find_info import get_name_info_xlsx, name_xlsx_to_dict

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

names = name_xlsx_to_dict('data/etunimitilasto-2019-01-07-vrk.xlsx')

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/notes")
def json_notes():
    return jsonify(notes)

@app.route("/api/names/<name>")
def json_names(name):
    count = names.get(name.lower())
    if count != None:
        return str(count)
    else:
        return "0"

if __name__ == '__main__':
    app.run(debug=True)
