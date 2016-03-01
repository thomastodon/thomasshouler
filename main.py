"""`main` is the top level module for your Flask application."""

# Import the Flask Framework
from flask import Flask, render_template
import csv
import os
import pdb
from collections import OrderedDict

app = Flask(__name__)
# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.

@app.route('/')
def index():
	projects = get_project()
	return render_template('index.html', projects=projects)

@app.route('/<project_id>')
def project(project_id):
	assets = {}
	for fp in os.listdir(os.path.join('static', 'assets', project_id)):
		assets[os.path.splitext(fp)[0]] = {"path": fp}

	assets = order_dict(assets, asc=True)
	project = get_project(project_id)
	links = get_links(project_id)

	return render_template('project.html', project=project, assets=assets, links=links)

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

def get_project(id=None):
	reader = csv.DictReader(open('static/project.csv'), delimiter=',', escapechar='\\')
	projects = {}

	for row in reader:
		if id == row['id']: return row
		key = row.pop('id')
		if key in projects: pass
		projects[key] = row

	return projects

def get_links(project_id=None):
	reader = csv.DictReader(open('static/link.csv'), delimiter=',', escapechar='\\')
	links = {}

	for row in reader:
		if project_id == row['project_id']:
			row.pop('project_id')
			key = row.pop('id')
			if key in links: pass
			links[key] = row

	return links




