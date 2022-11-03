from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField()


class CustomerVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    name = models.CharField(max_length=50)
    phone_number = models.PositiveBigIntegerField(unique=True)


class EmployeeVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    name = models.CharField(max_length=50)
    employee_number = models.PositiveIntegerField(unique=True)



class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=2000)
    phone_number = models.PositiveBigIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_customer", kwargs={"pk": self.id})



class Sale(models.Model):
    price = models.PositiveIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    sales_person = models.ForeignKey(
        EmployeeVO,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.PROTECT,
    )

    def get_api_url(self):
        return reverse("api_sale", kwargs={"pk": self.id})
