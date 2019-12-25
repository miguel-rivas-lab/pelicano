from django.shortcuts import render

def index(request):
  return render(request, 'drlogic-home.html')

def about_us(request):
  return render(request, 'drlogic-about-us.html')

def contact_us(request):
  return render(request, 'drlogic-contact-us.html')

def portfolio(request):
  return render(request, 'drlogic-portfolio.html')

def response_404(request):
  return render(request, 'drlogic-404.html')