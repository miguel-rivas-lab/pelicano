from django.shortcuts import render

def home_view(request, *args, **kwargs):
  return render(request, 'drlogic-home.html', {})

# def about_us_view(request, *args, **kwargs):
#   return render(request, 'drlogic-about-us.html', {})

# def contact_us_view(request, *args, **kwargs):
#   return render(request, 'drlogic-contact-us.html', {})

# def portfolio_view(request, *args, **kwargs):
#   return render(request, 'drlogic-portfolio.html', {})

# def response_404_view(request, *args, **kwargs):
#   return render(request, 'drlogic-404.html', {})

def testing_view(request, *args, **kwargs):
  return render(request, 'testing.html', {})