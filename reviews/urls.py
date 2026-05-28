from django.urls import path

from .views import (

    ReviewRecordView,

    AuditLogView
)

urlpatterns = [

    path(

        'review/<int:record_id>/',

        ReviewRecordView.as_view()
    ),

    path(

        'audit/',

        AuditLogView.as_view()
    ),

]