from django.db import models
from django.contrib.auth.models import User
from emissions.models import NormalizedEmissionRecord


class ReviewAction(models.Model):

    DECISIONS = [

        ('APPROVED','APPROVED'),
        ('REJECTED','REJECTED'),
        ('FLAGGED','FLAGGED')
    ]

    record = models.ForeignKey(
        NormalizedEmissionRecord,
        on_delete=models.CASCADE
    )

    reviewer = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    decision = models.CharField(
        max_length=20,
        choices=DECISIONS
    )

    comment = models.TextField(
        blank=True,
        null=True
    )

    timestamp = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.record} - {self.decision}"