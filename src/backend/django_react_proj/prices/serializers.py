from rest_framework import serializers
from .models import Product
from .models import Wishlist

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product 
        fields = ('id', 'name', 'amzMSRP', 'amzCurrentPrice', 'walMSRP', 'walCurrentPrice', 'lowestPrice', 'img', 'amzURL', 'walURL', 'dateAdded')

class WishlistSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = Wishlist
        fields = ('id', 'user', 'product', 'dateAdded')

