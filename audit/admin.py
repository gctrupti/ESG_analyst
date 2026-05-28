from django.contrib import admin
from .models import AuditLog


@admin.register(AuditLog)
class AuditLogAdmin(admin.ModelAdmin):

    list_display = (

        'entity',

        'action',

        'actor',

        'timestamp'
    )

    list_filter = (

        'entity',
    )

    search_fields = (

        'action',
    )