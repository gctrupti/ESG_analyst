from django.db import models
from django.contrib.auth.models import User


class AuditLog(models.Model):

    entity = models.CharField(
        max_length=100
    )

    action = models.CharField(
        max_length=100
    )

    old_data = models.JSONField(
        blank=True,
        null=True
    )

    new_data = models.JSONField(
        blank=True,
        null=True
    )

    actor = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    timestamp = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.entity} - {self.action}"