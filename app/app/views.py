from django.shortcuts import render

def get_url(app_name, section, format = 'pug'):
	return 'app-' + app_name + '-section-' + section + '.' + format

# ----------- A
# ----------- B
# ----------- C
# ----------- D
def drlogic_home(request):
	return render(request, get_url('drlogic','home'))
def drlogic_about(request):
	return render(request, get_url('drlogic','about'))
def drlogic_services(request):
	return render(request, get_url('drlogic','services'))
def drlogic_portfolio(request):
	return render(request, get_url('drlogic','portfolio'))
def drlogic_contact(request):
	return render(request, get_url('drlogic','contact'))
def drlogic_404(request):
	return render(request, get_url('drlogic','404'))
# ----------- E
# ----------- F
# ----------- G
# ----------- H
# ----------- I
# ----------- J
# ----------- K
# ----------- L
# ----------- M
# ----------- N
# ----------- O
# ----------- P
# ----------- Q
# ----------- R
# ----------- S
# ----------- T
# ----------- U
# ----------- V
# ----------- W
# ----------- X
# ----------- Y
# ----------- Z
# ----------- 0..9