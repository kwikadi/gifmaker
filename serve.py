from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os
import random
import string

app = Flask(__name__)

app.config['UPLOAD_FOLDER'] = './images'

@app.route("/")
def landing():
    return render_template("index.html")

@app.route("/data", methods = ["POST"])
def getdata():
    random_folder = ''.join([random.choice(string.ascii_letters + string.digits) for n in range(32)])
    new_folder = os.path.join(app.config['UPLOAD_FOLDER'], random_folder)
    os.mkdir(new_folder)
    for element in request.files.getlist("files[]"):
        element.save(os.path.join(new_folder,secure_filename(element.filename)))
    return redirect(url_for('landing'))