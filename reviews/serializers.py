from rest_framework import serializers
from .models import ReviewAction


class ReviewActionSerializer(serializers.ModelSerializer):

    reviewer = serializers.StringRelatedField()

    class Meta:

        model = ReviewAction

        fields = "__all__"