from flask import render_template, session, redirect, url_for, current_app, request
from flask_login import login_required, current_user
from . import main
from .forms import SearchForm
from .. import db
from ..models import User, ROLES


@main.route('/', methods=['GET', 'POST'])
def index():
    form = SearchForm()
    if form.validate_on_submit():
        what = form.what.data
        where = form.where.data
        print what, where
        return redirect(url_for('main.search')+'?what={}&where={}'.format(what,where))
    return render_template('index.html', form = form)

@main.route('/search')
def search():
    _id = request.args.get('what', 0, type=int)
    _id2 = request.args.get('where', 0, type=int)
    user = User.query.filter_by(id=_id).first_or_404()
    user2 = User.query.filter_by(id=_id2).first_or_404()
    return 'name: {}<br>email: {}<br>name: {}<br>email: {}<br>'.format(
        user.name, user.email, user2.name, user2.email)
