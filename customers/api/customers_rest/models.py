from django.db import models
from django.urls import reverse


class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=2000)
    phone_number = models.PositiveBigIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})
