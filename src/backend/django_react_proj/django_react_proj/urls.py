from django.contrib import admin
from django.urls import path, re_path
# from students import views as student_views
from prices import views as price_views
from django.conf import settings
from django.conf.urls.static import static 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/get_data/', price_views.get_data),
    path('api/get_data_id/<int:pk>/', price_views.get_data_id),
    path('api/add_item/', price_views.add_item),
    path('api/search_name/', price_views.search_name),
    path('api/search_name/<str:name>/', price_views.search_name),
    path('api/upload_image/', price_views.upload_image),
    path('api/get_wishlist/', price_views.get_wishlist),
    path('api/add_wishlist_item/', price_views.add_wishlist_item),
    re_path('login', price_views.login),
    re_path('signup', price_views.signup),
    re_path('test_token', price_views.test_token),
    path('api/get_users/', price_views.get_users),
    path('api/delete_wishlist_id/<int:pk>/', price_views.delete_wishlist_id)

]
urlpatterns = [
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)