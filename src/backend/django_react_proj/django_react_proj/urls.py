from django.contrib import admin
from django.urls import path, re_path
from students import views as student_views
from prices import views as price_views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/students/$', student_views.students_list),
    re_path(r'^api/students/([0-9])$', student_views.students_detail),
    path('api/get_data/', price_views.get_data),
    path('api/get_data_id/<int:pk>/', price_views.get_data_id),
    path('api/add_item/', price_views.add_item)
    #re_path(r'^api/get_data/$', views.get_data),
]
