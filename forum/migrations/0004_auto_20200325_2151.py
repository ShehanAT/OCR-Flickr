# Generated by Django 2.2.11 on 2020-03-25 21:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0003_auto_20200325_1736'),
    ]

    operations = [
        migrations.RenameField(
            model_name='thread',
            old_name='topic',
            new_name='subject',
        ),
    ]
