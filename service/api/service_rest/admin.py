from django.contrib import admin

from .models import AutomobileVO, CustomerVO, EmployeeVO, Service


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass


@admin.register(EmployeeVO)
class EmployeeVOAdmin(admin.ModelAdmin):
    pass


@admin.register(CustomerVO)
class CustomerVOAdmin(admin.ModelAdmin):
    pass
