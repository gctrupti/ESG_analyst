from django.contrib import admin
from django.urls import path, include
from .views import LoginView

urlpatterns = [

    path('admin/', admin.site.urls),

    path(
        'api/',
        include('ingestion.urls')
    ),
    path(
    'api/',
    include('reviews.urls')
),
path(
    'api/',
    include('emissions.urls')
),
path(
    'api/login/',
    LoginView.as_view()
)
]