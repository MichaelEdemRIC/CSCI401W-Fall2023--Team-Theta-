# Generated by Django 4.2.6 on 2023-12-01 18:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0011_rename_username_user_username'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
