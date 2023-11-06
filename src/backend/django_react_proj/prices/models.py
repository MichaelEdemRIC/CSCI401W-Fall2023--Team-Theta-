from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField("Name", max_length=240)
    price = models.CharField("Price", max_length=240)
    dateAdded = models.DateField("Date added", auto_now_add=True)

    def __str__(self):
        return self.name
