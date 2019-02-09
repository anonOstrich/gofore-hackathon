from flask import Flask, render_template, jsonify, request, send_file
from find_info import name_xlsx_to_dict, family_xlsx_to_dict

app = Flask(__name__, template_folder="./frontend/build/")

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
families = family_xlsx_to_dict('data/perh_006_201700.xlsx')

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


@app.route("/api/family/<year>/<status>")
def json_family(year, status):
    age = 2017 - int(year) # the data is from 2017
    if age < 112 and age >= 0:
        return str(round(families[age][int(status)],2))
    else:
        return "0"

@app.route("/manifest.json")
def serve_manifest():
    return send_file("./frontend/build/manifest.json", mimetype="application/json")


@app.route("/index.css")
def serve_css():
    return send_file("./frontend/build/index.css", mimetype="text/css")

if __name__ == '__main__':
    app.run(debug=True)
