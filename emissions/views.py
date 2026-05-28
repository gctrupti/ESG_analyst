from rest_framework.views import APIView
from rest_framework.response import Response

from .models import NormalizedEmissionRecord


class RecordsDashboardView(APIView):

    def get(self, request):

        records = NormalizedEmissionRecord.objects.all().values(

            'id',

            'activity_type',

            'normalized_value',

            'normalized_unit',

            'status',

            'suspicious_flag',

            'anomaly_reason'
        )

        return Response(records)