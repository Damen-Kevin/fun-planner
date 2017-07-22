# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-22 19:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fun_planner', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('location', models.CharField(blank=True, max_length=255)),
                ('category', models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='Question',
        ),
    ]
