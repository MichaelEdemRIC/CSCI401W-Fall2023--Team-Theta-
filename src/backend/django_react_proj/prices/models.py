from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):
    name = models.CharField("Name", max_length=240)
    # price = models.CharField("Price", max_length=240)
    amzMSRP = models.DecimalField(max_digits=6, decimal_places=2)
    amzCurrentPrice = models.DecimalField(max_digits=6, decimal_places=2)
    walMSRP = models.DecimalField(max_digits=6, decimal_places=2)
    walCurrentPrice = models.DecimalField(max_digits=6, decimal_places=2)
    lowestPrice = models.DecimalField(max_digits=6, decimal_places=2)
    # img = models.CharField("Name", max_length=240)
    img = models.ImageField(upload_to='images/', null=True, blank=True)
    amzURL = models.URLField(max_length=200)
    walURL = models.URLField(max_length=200)
    dateAdded = models.DateField("Date added", auto_now_add=True)

    def __str__(self):
        return self.name

class Wishlist(models.Model):
    user = models.CharField(max_length=60)
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    dateAdded = models.DateField(auto_now_add=True)

    def __str__(self):
        # return f"{self.user.username}'s Wishlist: {self.product.name}"
        return f"{self.user}'s Wishlist: {self.product.name}"
