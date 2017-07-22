from rest_framework.routers import DefaultRouter
from .api import ActivityViewSet
router = DefaultRouter()
router.register(r'activities', ActivityViewSet)
urlpatterns = router.urls