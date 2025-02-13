from setuptools import setup, find_packages


setup(
    name='my_project',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'certifi==2024.7.4',
        'Gunicorn',
        'Flask',
        'Flask-Cors',
        'Flask-Session',
        'requests',
    ],
)