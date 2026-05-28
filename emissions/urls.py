from django.urls import path
from .views import RecordsDashboardView

urlpatterns = [

    path(

        'records/',

        RecordsDashboardView.as_view()
    )
]