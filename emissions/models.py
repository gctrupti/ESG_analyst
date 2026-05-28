from django.db import models
from organizations.models import Organization
from ingestion.models import SourceConfig


class NormalizedEmissionRecord(models.Model):

    STATUS_CHOICES = [

        ('PENDING', 'PENDING'),
        ('FLAGGED', 'FLAGGED'),
        ('APPROVED', 'APPROVED'),
        ('LOCKED', 'LOCKED'),
        ('FAILED', 'FAILED'),
    ]

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE
    )

    source = models.ForeignKey(
        SourceConfig,
        on_delete=models.CASCADE
    )

    scope = models.CharField(
        max_length=20
    )

    category = models.CharField(
        max_length=100
    )

    activity_type = models.CharField(
        max_length=100
    )

    original_value = models.FloatField()

    original_unit = models.CharField(
        max_length=50
    )

    normalized_value = models.FloatField()

    normalized_unit = models.CharField(
        max_length=50
    )

    suspicious_flag = models.BooleanField(
        default=False
    )
    anomaly_reason = models.TextField(
    blank=True,
    null=True
)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    def __str__(self):
        return f"{self.activity_type}"