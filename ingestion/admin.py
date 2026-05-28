from django.contrib import admin
from .models import SourceConfig, RawUpload, RawRecord

admin.site.register(SourceConfig)
admin.site.register(RawUpload)
admin.site.register(RawRecord)