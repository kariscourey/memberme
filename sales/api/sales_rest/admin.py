from django.contrib import admin

from .models import CustomerVO, EmployeeVO, Sale


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass


@admin.register(EmployeeVO)
class EmployeeVOAdmin(admin.ModelAdmin):
    pass


@admin.register(CustomerVO)
class CustomerVOAdmin(admin.ModelAdmin):
    pass
