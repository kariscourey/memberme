from django.contrib import admin

from .models import SalesPerson, Customer, Sale, EmployeeVO


@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    pass

@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass

@admin.register(EmployeeVO)
class EmployeeVOAdmin(admin.ModelAdmin):
    pass
