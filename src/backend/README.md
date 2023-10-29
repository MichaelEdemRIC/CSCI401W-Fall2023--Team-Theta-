# Running the backend

### Create and use a Python environment
```
python -m venv pawsome_prices_env
source ./pawsome_prices_env/bin/activate
```
Note - it only needs to be created once. Use the "source" line when you want to activate it again

### Install libraries
The `requirements.txt` file should list all Python libraries that we are using and they will be installed using:

```
pip install -r requirements.txt
```

### Start the server
- navigate to the django_react_proj folder
- start the server
```
python manage.py runserver
```