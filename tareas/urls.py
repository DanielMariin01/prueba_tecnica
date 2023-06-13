from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tareas import views

router = routers.DefaultRouter()
router.register(r'tareas', views.TareaVista, 'tareas')
urlpatterns = [

path('appi/1/', include(router.urls)),
 path('docs/', include_docs_urls(title="Tareas API"))

]