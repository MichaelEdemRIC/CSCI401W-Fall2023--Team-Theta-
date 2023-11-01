# Generated by Django 4.2.6 on 2023-10-28 15:54

from django.db import migrations

def create_data(apps, schema_editor):
    Product = apps.get_model('prices', 'Product')
    Product(name="Dog Bowl", price="9.99").save()



class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]