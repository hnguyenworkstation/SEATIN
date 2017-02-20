#submit form
from flask_wtf import Form
from wtforms import *
from wtforms.validators import *

#Language dictionary
from Language import en


"""
Field type           Description
	StringField          Text field
	TextAreaField        Multiple-line text field
	PasswordField        Password text field
	HiddenField          Hidden text field
	DateField            Text field that accepts a datetime.date value in a given format
	DateTimeField        Text field that accepts a datetime.datetime value in a given format
	IntegerField         Text field that accepts an integer value
	DecimalField         Text field that accepts a decimal.Decimal value
	FloatField           Text field that accepts a floating-point value
	BooleanField         Checkbox with True and False values
	RadioField           List of radio buttons
	SelectField          Drop-down list of choices
	SelectMultipleField  Drop-down list of choices with multiple selection
	FileField            File upload field
	SubmitField          Form submission button
	FormField            Embed a form as a field in a container form
	FieldList            List of fields of a given type
	
Validator            Description
  Email                Validates an email address
	EqualTo              Comparesthevaluesof twofields;usefulwhen requestingapasswordtobeenteredtwiceforconfirmation
	IPAddress            Validates an IPv4 network address
	Length               Validates the length of the string entered
	NumberRange          Validates that the value entered is within a numeric range
	Optional             Allows empty input on the field, skipping additional validators
	Required             Validates that the field contains data
	Regexp               Validates the input against a regular expression
	URL                  Validates a URL
	AnyOf                Validates that the input is one of a list of possible values
	NoneOf               Validates that the input is none of a list of possible values
"""
class SearchForm(Form):
	query = StringField(en['SEARCH'], validators = [Required()])

class SignUpForm(Form):
	first_name  = StringField(en['FIRST_NAME']  , validators = [ Required(), Length(max = 50) ])
	middle_name = StringField(en['MIDDLE_NAME'] , validators = [ Required(), Length(max = 30) ])
	last_name   = StringField(en['LAST_NAME']   , validators = [ Required(), Length(max = 50) ])
	email       = StringField(en['EMAIL']       , validators = [ Required(), Email() ])
