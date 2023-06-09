from django.urls import path
from . views import TaskList, DurgaLoginView, RegisterPage, CreateTask, UpdateTask, DeleteView, home

from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('', home, name='home'),
    path('task-list/', TaskList.as_view(), name='tasks'),
    path('login/', DurgaLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page = 'home'), name='logout'),
    path('register/', RegisterPage.as_view(), name='signup'),
    path('task-create/', CreateTask.as_view(), name='task-create'),
    path('task-update/<int:pk>/', UpdateTask.as_view(), name='task-update'),
    path('task-delete/<int:pk>/', DeleteView.as_view(), name='task-delete'),
]