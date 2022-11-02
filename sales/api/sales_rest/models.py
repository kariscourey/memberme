from django.db import models


class SalesPerson(models.Model):
    name = models.CharField(max_length=50)
    employee_number = models.PositiveIntegerField(unique=True)


class EmployeeVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    name = models.CharField(max_length=50)
    employee_number = models.PositiveIntegerField(unique=True)



class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=2000)
    phone_number = models.PositiveBigIntegerField(unique=True)



class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField()



class Sale(models.Model):
    price = models.PositiveIntegerField()
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
