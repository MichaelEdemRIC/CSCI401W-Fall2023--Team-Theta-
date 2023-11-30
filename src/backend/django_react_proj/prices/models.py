from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField("Name", max_length=240)
    # price = models.CharField("Price", max_length=240)
    amzMSRP = models.DecimalField(max_digits=6, decimal_places=2)
    amzCurrentPrice = models.DecimalField(max_digits=6, decimal_places=2)
    walMSRP = models.DecimalField(max_digits=6, decimal_places=2)
    walCurrentPrice = models.DecimalField(max_digits=6, decimal_places=2)
    lowestPrice = models.DecimalField(max_digits=6, decimal_places=2)
    img = models.CharField("Name", max_length=240)
    amzURL = models.URLField(max_length=200)
    walURL = models.URLField(max_length=200)
    dateAdded = models.DateField("Date added", auto_now_add=True)

    def __str__(self):
        return self.name
