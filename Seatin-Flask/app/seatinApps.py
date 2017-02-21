#flask frame-work
from flask import Flask, render_template, session, redirect, url_for, request

#mysql database
#from flaskext.mysql import MySQL

#import all of the forms for this App
from utils.forms import * #SearchForm, SignUpForm

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	form = SearchForm()
	if request.method == 'POST' and form.validate():
		#do something to return query
		print "Data is being saved"
		return "<h2>Your info looks good.</h2>"
	else:
		print "your data is wrong"
	return render_template('index.html', form = form)

if __name__ == '__main__':
	app.run(debug=True)


