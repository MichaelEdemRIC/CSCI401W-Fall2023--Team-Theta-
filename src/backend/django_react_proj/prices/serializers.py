from rest_framework import serializers
from .models import Product
from django.contrib.auth.models import User

class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product 
        fields = ('pk', 'name', 'amzMSRP', 'amzCurrentPrice', 'walMSRP', 'walCurrentPrice', 'lowestPrice', 'img', 'amzURL', 'walURL', 'dateAdded')

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')
