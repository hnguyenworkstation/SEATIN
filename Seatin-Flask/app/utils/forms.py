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
	what    =  StringField( en['TITLE_WHAT']  )
	where   =  StringField( en['TITLE_WHERE'] )
	when    =  SelectField( en['TITLE_WHEN'],  validators = [Required()])
	diners  = IntegerField( en['TITLE_DINERS'],validators = [Required()])
	#options =  SelectField( en['TITLE_DINING_OPTION'],choices = {'in': en['EATIN'],
	 #                                                            'pick': en['PICKUP']}, coerce = str)
	submit  =  SubmitField( en['TITLE_SEARCH'])
	
class SignUpForm(Form):
	first_name  =   StringField( en['TITLE_FIRST_NAME']  , validators = [ Required(en['FIRST_NAME_REQ']), Length(max = 50) ])
	middle_name =   StringField( en['TITLE_MIDDLE_NAME'] )
	last_name   =   StringField( en['TITLE_LAST_NAME']   , validators = [ Required(en['LAST_NAME_REQ']), Length(max = 50) ])
	email       =   StringField( en['TITLE_EMAIL']       , validators = [ Required(en['EMAIL_REQ']), Email() ])
	password    = PasswordField( en['TITLE_PASSWORD']  , validators = [ Required(en['PASSWORD_REQ']), Length(min = 8)])
	submit      =   SubmitField( en['TITLE_SUBMIT'] )