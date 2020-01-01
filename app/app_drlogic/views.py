from django.shortcuts import render

def home_view(request):
  return render(request, 'drlogic-home.html', {})

def test_view(request):
  return render(request, 'drlogic-test.html', {})