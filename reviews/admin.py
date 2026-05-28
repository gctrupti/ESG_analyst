from django.contrib import admin
from .models import ReviewAction


@admin.register(ReviewAction)
class ReviewActionAdmin(admin.ModelAdmin):

    list_display = (

        'id',

        'record',

        'reviewer',

        'decision',

        'timestamp'
    )

    list_filter = (

        'decision',
    )

    search_fields = (

        'decision',
    )