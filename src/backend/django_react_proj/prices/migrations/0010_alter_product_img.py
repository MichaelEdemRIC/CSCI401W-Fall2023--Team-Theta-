# Generated by Django 4.2.6 on 2023-11-29 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("prices", "0009_alter_product_img"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="img",
            field=models.ImageField(blank=True, null=True, upload_to="images/"),
        ),
    ]
