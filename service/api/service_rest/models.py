from django.db import models

# Create your models here.
#todo clean up automobilevo keep vin only
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    model_id = models.PositiveSmallIntegerField()

    def __str__(self):
        return f"{self.vin}"

class Technician(models.Model):
    tech_name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f"{self.tech_name}"

class ServiceAppointment(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="service_appointments",
        on_delete=models.PROTECT,
    )
    owner_name = models.CharField(max_length=100)
    appointment_date = models.DateTimeField(auto_now=False)
    technician = models.ForeignKey(
        Technician,
        related_name="service_appointments",
        on_delete=models.PROTECT,
    )
    reason = models.CharField(max_length=300)
    status = models.CharField(max_length=25,default="scheduled")

    def __str__(self):
        return f"{self.appointment_date}"
