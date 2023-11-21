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


@api_view(['GET', 'PUT'])
def get_data_id(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return JsonResponse({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ProductSerializer(product)
        return JsonResponse(serializer.data)
    
    elif request.method == "PUT":
        product_data = JSONParser().parse(request)
        serializer = ProductSerializer(product, data=product_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def add_item(request):
     if request.method == "POST":
        product_data = JSONParser().parse(request)
        serializer = ProductSerializer(data=product_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def search_name(request, name):
    if request.method == "GET":
        # query = request.data['name']
        product = Product.objects.filter(name__icontains=name)
        print(len(product))
        # serializer = ProductSerializer(product[0])
        serializer = ProductSerializer(product, many=True)
        # return JsonResponse(serializer.data)
        return JsonResponse(serializer.data, safe=False)
# @api_view(['PUT'])
# def search_name(request):
#     if request.method == "PUT":
#         query = request.data['name']
#         product = Product.objects.filter(name__icontains=query)
#         serializer = ProductSerializer(product[0])
#         return JsonResponse(serializer.data)