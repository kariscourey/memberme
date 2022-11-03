from django.contrib import admin

from .models import Customer, Sale, EmployeeVO


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass

@admin.register(EmployeeVO)
class EmployeeVOAdmin(admin.ModelAdmin):
    pass
