from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.response import Response


class LoginView(APIView):

    def post(self,request):

        username = request.data.get('username')

        password = request.data.get('password')

        user = authenticate(

            username=username,

            password=password
        )

        if user:

            login(request,user)

            return Response({

                "message":"Login Success"
            })

        return Response({

            "error":"Invalid Credentials"

        },status=401)