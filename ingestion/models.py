from django.db import models
from django.contrib.auth.models import User
from organizations.models import Organization


class SourceConfig(models.Model):

    SOURCE_TYPES = [

        ('SAP', 'SAP'),
        ('UTILITY', 'UTILITY'),
        ('TRAVEL', 'TRAVEL'),
    ]

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE
    )

    source_type = models.CharField(
        max_length=20,
        choices=SOURCE_TYPES
    )

    ingestion_method = models.CharField(
        max_length=50
    )

    def __str__(self):
        return f"{self.organization.name} - {self.source_type}"


class RawUpload(models.Model):

    source = models.ForeignKey(
        SourceConfig,
        on_delete=models.CASCADE
    )

    uploaded_file = models.FileField(
        upload_to='uploads/'
    )

    uploaded_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    status = models.CharField(
        max_length=50,
        default='PENDING'
    )

    def __str__(self):
        return f"Upload {self.id}"


class RawRecord(models.Model):

    upload = models.ForeignKey(
        RawUpload,
        on_delete=models.CASCADE
    )

    payload = models.JSONField()

    parse_status = models.CharField(
        max_length=50,
        default='SUCCESS'
    )

    error_message = models.TextField(
        blank=True,
        null=True
    )

    def __str__(self):
        return f"RawRecord {self.id}"