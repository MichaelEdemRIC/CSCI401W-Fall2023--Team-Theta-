# Running the backend

### Create and use a Python environment
```
# create virtual environment
python -m venv pawsome_prices_env

# activate virutal environment on mac
source ./pawsome_prices_env/bin/activate

# activate virutal environment in cmd.exe
pawsome_prices_env\Scripts\activate.bat

# activate virutal environment in PowerShell
pawsome_prices_env\Scripts\Activate.ps1
```
Note - it only needs to be created once. Use the activate line when you want to activate it again

### Install libraries
The `requirements.txt` file should list all Python libraries that we are using and they will be installed using:
- navigate to the django_react_proj folder
```
pip install -r requirements.txt
```

### Start the server
- navigate to the django_react_proj folder
- start the server
```
python manage.py runserver
```