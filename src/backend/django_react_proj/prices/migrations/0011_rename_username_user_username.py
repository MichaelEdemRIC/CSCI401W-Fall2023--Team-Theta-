# Generated by Django 4.2.6 on 2023-11-28 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0010_prices'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='userName',
            new_name='username',
        ),
    ]