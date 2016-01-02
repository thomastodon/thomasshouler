"""`main` is the top level module for your Flask application."""

# Import the Flask Framework
from flask import Flask, render_template
import csv
import os
from collections import OrderedDict

app = Flask(__name__)
# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.

@app.route('/')
def index():
	reader = csv.DictReader(open('static/projects.csv'))
	projects = {}
	for row in reader:
	    key = row.pop('id')
	    if key in projects:
	        # implement your duplicate row handling here
	        pass
	    projects[key] = row
	return render_template('index.html', projects=projects)

@app.route('/<project_id>')
def project(project_id):
	assets = {}
	for fp in os.listdir(os.path.join('static', 'assets', project_id)):
		assets[os.path.splitext(fp)[0]] = {"path": fp}

	assets = order_dict(assets, asc=True)

	return render_template('project.html', project_id=project_id, assets=assets)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, Nothing at this URL.', 404


@app.errorhandler(500)
def application_error(e):
    """Return a custom 500 error."""
    return 'Sorry, unexpected error: {}'.format(e), 500




# Generic Functions

def order_dict(d, asc=False):

    od = OrderedDict(sorted(d.items()))
    if asc: return od

    items = list(od.items())
    items.reverse()
    od = OrderedDict(items)
    return od