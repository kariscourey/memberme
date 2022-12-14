from django.db import models
from django.urls import reverse


class Position(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_position", kwargs={"pk": self.id})


class Employee(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveIntegerField(unique=True)
    position = models.ForeignKey(
        Position,
        related_name="positions",
        on_delete=models.PROTECT,
    )


    def get_api_url(self):
        return reverse("api_employee", kwargs={"pk": self.id})
