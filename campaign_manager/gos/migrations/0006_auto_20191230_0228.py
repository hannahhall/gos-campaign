# Generated by Django 3.0.1 on 2019-12-30 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gos', '0005_blog_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='npc',
            name='alignment',
            field=models.CharField(choices=[('Lawful Good', 'Lawful Good'), ('Neutral Good', 'Neutral Good'), ('Chaotic Good', 'Chaotic Good'), ('Lawful Neutral', 'Lawful Neutral'), ('Neutral', 'Neutral'), ('Chaotic Neutral', 'Chaotic Neutral'), ('Lawful Evil', 'Lawful Evil'), ('Neutral Evil', 'Neutral Evil'), ('Chaotic Evil', 'Chaotic Evil')], max_length=30),
        ),
    ]