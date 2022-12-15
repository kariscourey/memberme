from django.contrib import admin

from .models import Automobile, Manufacturer, VehicleModel

admin.site.register(Automobile)
admin.site.register(Manufacturer)
admin.site.register(VehicleModel)
