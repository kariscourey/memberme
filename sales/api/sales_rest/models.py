from django.db import models


class SalesPerson(models.Model):
    name = models.CharField(max_length=50)
    employee_number = models.PositiveSmallIntegerField(unique=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=2000)
    phone_number = models.PositiveBigIntegerField(unique=True)

    def __str__(self):
        return self.name


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    model_id = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.vin


class Sale(models.Model):
    price = models.PositiveSmallIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.PROTECT,
    )

    def __str__(self):
        return self.automobile
