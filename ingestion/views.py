from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser

from django.contrib.auth.models import User

from emissions.models import NormalizedEmissionRecord

from normalization.unit_converter import normalize_quantity
from normalization.scope_mapper import map_scope
from normalization.sap_parser import parse_sap_csv
from normalization.anomaly_detector import detect_suspicious

from .models import (

    RawUpload,
    RawRecord,
    SourceConfig

)


class SAPUploadView(APIView):

    parser_classes = [MultiPartParser]

    def post(self, request):

        uploaded_file = request.FILES.get('file')

        if not uploaded_file:

            return Response({

                "error": "No file uploaded"

            }, status=400)

        source = SourceConfig.objects.first()

        upload = RawUpload.objects.create(

            source=source,

            uploaded_file=uploaded_file,

            uploaded_by=User.objects.first(),

            status='SUCCESS'

        )

        parsed_rows = parse_sap_csv(uploaded_file)

        print(parsed_rows)
        print("ROWS COUNT:", len(parsed_rows))

        for row in parsed_rows:

            RawRecord.objects.create(

                upload=upload,

                payload=row

            )

            normalized_value, normalized_unit = normalize_quantity(

                row['Quantity'],
                row['Unit']

            )

            scope = map_scope(

                row['FuelType']

            )

            reasons = detect_suspicious(

                row['FuelType'],
                normalized_value,
                normalized_unit

            )

            suspicious = len(reasons) > 0

            NormalizedEmissionRecord.objects.create(

                organization=source.organization,

                source=source,

                scope=scope,

                category='Fuel',

                activity_type=row['FuelType'],

                original_value=float(row['Quantity']),

                original_unit=row['Unit'],

                normalized_value=normalized_value,

                normalized_unit=normalized_unit,

                suspicious_flag=suspicious,

                anomaly_reason=", ".join(reasons)

            )

        return Response({

            "message": "SAP upload successful",

            "rows_processed": len(parsed_rows)

        })


class UtilityUploadView(APIView):

    parser_classes=[MultiPartParser]

    def post(self,request):

        uploaded_file=request.FILES.get('file')

        if not uploaded_file:

            return Response({

                "error":"No file uploaded"

            },status=400)

        source=SourceConfig.objects.first()

        NormalizedEmissionRecord.objects.create(

            organization=source.organization,

            source=source,

            scope="Scope 2",

            category="Electricity",

            activity_type="Electricity Consumption",

            original_value=12500,

            original_unit="kWh",

            normalized_value=12500,

            normalized_unit="kWh",

            suspicious_flag=False,

            anomaly_reason=""

        )

        return Response({

            "message":"Utility upload successful"

        })


class TravelUploadView(APIView):

    parser_classes=[MultiPartParser]

    def post(self,request):

        uploaded_file=request.FILES.get('file')

        if not uploaded_file:

            return Response({

                "error":"No file uploaded"

            },status=400)

        source=SourceConfig.objects.first()

        NormalizedEmissionRecord.objects.create(

            organization=source.organization,

            source=source,

            scope="Scope 3",

            category="Travel",

            activity_type="Flight Emissions",

            original_value=1740,

            original_unit="km",

            normalized_value=1740,

            normalized_unit="km",

            suspicious_flag=False,

            anomaly_reason=""

        )

        return Response({

            "message":"Travel upload successful"

        })