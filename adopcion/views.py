from django.shortcuts import render
from .models import Interesado, Rescatado
# Create your views here.
def index(request):
    return render(request, 'adopcion/index.html', {})

def gallery(request):
    return render(request, 'adopcion/gallery.html', {})