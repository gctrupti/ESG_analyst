from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListAPIView

from django.contrib.auth.models import User

from emissions.models import NormalizedEmissionRecord
from audit.models import AuditLog

from .models import ReviewAction
from .serializers import ReviewActionSerializer


class ReviewRecordView(APIView):

    def post(self, request, record_id):

        decision = request.data.get('decision')

        record = NormalizedEmissionRecord.objects.get(

            id=record_id

        )

        previous_status = record.status

        professional_comments = {

            'APPROVED':
            'Record verified against source data',

            'FLAGGED':
            'Anomaly detected — manual investigation required',

            'REJECTED':
            'Record rejected due to inconsistent source values'

        }

        comment = professional_comments.get(

            decision,

            'ESG analyst review completed'

        )

        ReviewAction.objects.create(

            record=record,

            reviewer=User.objects.first(),

            decision=decision,

            comment=comment

        )

        if decision == 'APPROVED':

            record.status = 'APPROVED'

        elif decision == 'REJECTED':

            record.status = 'FAILED'

        elif decision == 'FLAGGED':

            record.status = 'FLAGGED'

        record.save()

        AuditLog.objects.create(

            entity='NormalizedEmissionRecord',

            action=f'Review decision: {decision}',

            old_data={

                "previous_status": previous_status

            },

            new_data={

                "new_status": record.status,

                "comment": comment

            },

            actor=User.objects.first()

        )

        return Response({

            "message": "Review saved",

            "record_status": record.status

        })


class AuditLogView(ListAPIView):

    queryset = ReviewAction.objects.all().order_by(

        '-timestamp'

    )

    serializer_class = ReviewActionSerializer