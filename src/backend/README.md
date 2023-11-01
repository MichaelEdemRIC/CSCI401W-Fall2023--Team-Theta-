# Running the backend

### Create and use a Python environment
```
# create virtual environment
python -m venv pawsome_prices_env

# activate virtual environment on mac
source ./pawsome_prices_env/bin/activate

# activate virtual environment in cmd.exe
pawsome_prices_env\Scripts\activate.bat

# activate virtual environment in PowerShell
pawsome_prices_env\Scripts\Activate.ps1
```
Note - the virtual environment only needs to be created once. Use the activate line when you want to activate it again

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
- access the Get All Data endpoint via http://localhost:8000/api/get_data

### Endpoints
base URL: http://localhost:8000/api

/get_data - GET
```
curl http://localhost:8000/get_data/
```
/get_data_id - GET, PUT
```
curl http://localhost:8000/get_data_id/1/
curl -X PUT http://localhost:8000/get_data_id/1/ -d '{"name": "Horse Saddle", "price": "129.00"}' -H "Content-Type: application/json"

```
/add_item - POST
```
curl -X PUT http://localhost:8000/add_item/ -d '{"name": "Pony Spray", "price": "325.50"}' -H "Content-Type: application/json"

```