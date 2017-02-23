from . import db
import datetime
from werkzeug.security import generate_password_hash, check_password_hash

#[TODO]: add function from id to md5 url

class User(db.Model):
	__tablename__ = 'users'
	#authenticate info
	id            = db.Column(db.BigInteger, primary_key=True)
	username      = db.Column(db.String(64), unique=True, index=True)
	email         = db.Column(db.String(50), nullable=False)
	password_hash = db.Column(db.String(128))
	role_id       = db.Column(db.Integer, db.ForeignKey('roles.id'))
	
	#personal info
	first_name    = db.Column(db.Unicode(60), nullable = False)
	middle_name   = db.Column(db.Unicode(40), nullable = True)
	last_name     = db.Column(db.Unicode(60), nullable = False
	sex           = db.Column(db.Enum('M', 'O', 'F', name='gender_enum', create_type=False)) #O is other
	joined_date   = db.Column(db.DateTime, default = datetime.datetime.now())
	badge_id      = db.Column(db.Int, db.ForeignKey('badge.id'), default = 0)
	avatar_img    = db.Column(db.BigInteger, ForeignKey('images.id'))
	phone         = db.Column(db.String(20), nullable=False)
	
	#location info
	location      = db.relationship('Location', backref='user', lazy='dynamic')
	
	#number of reviews
	count_review  = db.Column(db.Integer, default = 0)
	
	@property
	def password(self):
		raise AttributeError('password is not a readable attribute')
	
	@password.setter
	def password(self, password):
		self.password_hash = generate_password_hash(password)
		
	def verify_password(self, password):
		return check_password_hash(self.password_hash, password)
		
	def __repr__(self):
	  return '<User %r>' % self.username

class Role(db.Model):
  __tablename__ = 'roles'
  id            = db.Column(db.Integer, primary_key=True)
  desc          = db.Column(db.Unicode(64), unique=True)
  users         = db.relationship('User', backref='role', lazy='dynamic')

  def __repr__(self):
    return '<Role %r>' % self.desc

class Badge(db.Model):
	__tablename__ = 'badges'
	id            = db.Column(db.Integer, primary_key=True)
	name          = db.Column(db.Unicode(64), unique=True)
	users         = relationship('User', backref='badge', lazy='dynamic')
	
	def __repr__(self):
    return '<Badge %r>' % self.name

class Product(db.Model):
	__tablename__ = 'products'
	id            = db.Column(db.BigInteger, primary_key=True)
	name          = db.Column(db.Unicode(30))
	price         = db.Column(db.Float, default=0.0)
	option        = db.Column(db.Enum("E", "S", "P",name="dining_option_enum", create_type=False) #E: eat in; S: SMode, P: Pickup
	desc          = db.Column(db.String(100))
	diners        = db.Column(db.Integer)
	imgs          = db.relationship('Image'   , backerf = 'products', lazy='dynamic')
	
	location      = db.relationship('Location', backref = 'products', lazy='dynamic')
	reviews       = db.relationship('Review'  , backref = 'products', lazy='dynamic')

class Location(db.Model):
	#location info
	__tablename__ = 'locations'
	id            = db.Column(db.Integer, primary_key=True)
	address1      = db.Column(db.Unicode(90), nullable=False)
	address2      = db.Column(db.Unicode(50), nullable=True)
	city          = db.Column(db.Unicode(60), nullable=False)
	state         = db.Column(db.Unicode(10))
	postalCode    = db.Column(db.Integer, nullable=False)
	country       = db.Column(db.Unicode(30), nullable=False)
	latitude      = db.Column(db.Float)
	longtitude    = db.Column(db.Float)
	user_id       = db.Column(db.Integer   , db.ForeignKey('users.id'))
	product_id    = db.Column(db.BigInteger, db.ForeignKey('products.id'))
	
	def __repr__(self):
		return '<Location %r %r %r>' % (self.address1,self.city, self.country) 

class Image(db.Model):
	__tablename__ = 'images'
	id            = db.Column(db.BigInteger, primary_key=True)
	desc          = db.Column(db.String(30), nullable=True)
	product_id    = db.Column(db.BigInteger, ForeignKey('product.id'))
	
	def __repr__(self):
		return '<Image %r %r>' %(self.id, self.desc)
	
class Review(db.Model):
	__tablename__ = 'reviews'
	id            = db.Column(db.BigInteger  , primary_key=True)
	content       = db.Column(db.Unicode(200), nullable = True)
	upvote        = db.Column(db.Integer     , default = 0)
	timestamp     = db.Column(db.DateTime    , default=datetime.datetime.now(), nullable=False)
	product_id    = db.Column(db.BigInteger  , db.ForeignKey('products.id'))
	rating_star   = db.Column(db.Integer)
	
	def __repr__(self):
		return '<Review %r %r>' % (self.id, self.content)

    	
