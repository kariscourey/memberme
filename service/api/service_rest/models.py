from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)


class CustomerVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    name = models.CharField(max_length=50)
    phone_number = models.PositiveBigIntegerField(unique=True)


class EmployeeVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    name = models.CharField(max_length=50)
    employee_number = models.PositiveIntegerField(unique=True)


class Service(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="services",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        CustomerVO,
        related_name="services",
        on_delete=models.PROTECT,
    )
    appointment_date = models.DateTimeField(auto_now=False)
    technician = models.ForeignKey(
        EmployeeVO,
        related_name="services",
        on_delete=models.PROTECT,
    )
    reason = models.CharField(max_length=300)
    status = models.CharField(max_length=25,default="scheduled")

    def get_api_url(self):
        return reverse("api_service", kwargs={"pk": self.id})
