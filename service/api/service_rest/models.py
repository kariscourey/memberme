from django.db import models

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return f"{self.vin}"


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f"{self.name}"


class Service(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="services",
        on_delete=models.PROTECT,
    )
    customer = models.CharField(max_length=100)
    appointment_date = models.DateTimeField(auto_now=False)
    technician = models.ForeignKey(
        Technician,
        related_name="services",
        on_delete=models.PROTECT,
    )
    reason = models.CharField(max_length=300)
    status = models.CharField(max_length=25,default="scheduled")

    def __str__(self):
        return f"{self.appointment_date}"
