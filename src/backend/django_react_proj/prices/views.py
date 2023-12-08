#from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser

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
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
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
        product = Product.objects.filter(name__icontains=name)
        serializer = ProductSerializer(product, context={'request': request}, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def upload_image(request):
    if request.method == "POST":
        data = request.data
        obj_id = data['obj_id']
        obj = Product.objects.get(pk=obj_id)

        obj.image = request.FILES.get('image')
        obj.save()

        return Response('Image was successfully uploaded')

# admin endpoint
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def get_wishlist(request):
    if request.method == 'GET':
        wishlist_items = Wishlist.objects.all()
        serializer = WishlistSerializer(wishlist_items, many=True)
        return JsonResponse(serializer.data, safe=False)

# admin endpoint
@api_view(['DELETE'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def delete_wishlist_id(request, pk):

    if request.method == "DELETE":
        Product.objects.filter(id=pk).delete()

        return JsonResponse("deleted", safe=False)

# user endpoint
@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def add_wishlist_item(request):
     if request.method == "POST":
        wishlist_data = JSONParser().parse(request)
        serializer = WishlistSerializer(data=wishlist_data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_200_OK)

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("Missing user.", status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    # return Response("passed!")
    return Response("passed for {}".format(request.user.id))

# admin endpoint
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def get_users(request):
    if request.method == 'GET':
        product = User.objects.all()
        serializer = UserSerializer(product, many=True)
        return JsonResponse(serializer.data, safe=False)
    
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated, IsAdminUser])
def test_admin_token(request):
    return Response("passed for {}".format(request.user.id))

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_user_token(request):
    return Response("passed for {}".format(request.user.id))