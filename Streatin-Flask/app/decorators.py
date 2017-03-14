from functools import wraps
from flask import abort
from flask_login import current_user
from .models import ROLES


def roles_required(role):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, ** kwargs):
            if not current_user.is_(role):
                abort(403)
            return f(*args, **kwargs)
        return decorated_function
    return decorator


def admin_required(f):
    return roles_required(ROLES['Administrator'])(f)


def gourmet_required(f):
    return roles_required(ROLES['Gourmet'])(f)


def chef_required(f):
    return roles_required(ROLES['Chef'])(f)


def super_chef_required(f):
    return roles_required(ROLES['Super Chef'])(f)
