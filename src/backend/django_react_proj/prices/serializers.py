from rest_framework import serializers
from .models import Product
from .models import Wishlist
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product 
        fields = ('id', 'name', 'amzMSRP', 'amzCurrentPrice', 'walMSRP', 'walCurrentPrice', 'lowestPrice', 'img', 'amzURL', 'walURL', 'dateAdded')

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password')

class WishlistSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    # user = UserSerializer()

    class Meta:
        model = Wishlist
        fields = ('id', 'user', 'product', 'product_id', 'dateAdded')
