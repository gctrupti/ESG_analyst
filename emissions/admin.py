from django.contrib import admin
from .models import NormalizedEmissionRecord


@admin.register(NormalizedEmissionRecord)
class NormalizedEmissionRecordAdmin(admin.ModelAdmin):

    list_display = (

        'id',

        'activity_type',

        'scope',

        'normalized_value',

        'normalized_unit',

        'status',

        'suspicious_flag'
    )

    list_filter = (

        'scope',

        'status',

        'suspicious_flag'
    )

    search_fields = (

        'activity_type',

        'scope'
    )