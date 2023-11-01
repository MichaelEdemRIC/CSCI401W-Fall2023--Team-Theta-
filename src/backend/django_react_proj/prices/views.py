#from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Product 
from .serializers import *

@api_view(['GET'])
def get_data(request):
    if request.method == 'GET':
        product = Product.objects.all()

        serializer = ProductSerializer(product, context={'request': request}, many=True)
        return Response(serializer.data)

        # serializer = ProductSerializer(product, many=True)
        # return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def get_data_id(request, pk):
    print("at get data name function start") # delete
    try:
        product = Product.objects.get(pk=pk)
        print(product.price)
    except Product.DoesNotExist:
        return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)