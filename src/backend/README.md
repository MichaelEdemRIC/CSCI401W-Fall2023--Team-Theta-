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
### Authentication Endpoints
base URL: http://localhost:8000

**/signup** - POST
```
curl -X POST http://localhost:8000/signup/ -d '{"username": "test_user", "password": "Pass1234!", "email": "testuser@test.com"}' -H "Content-Type: application/json"
```
**/login** - POST
```
curl -X POST http://localhost:8000/login/ -d '{"username": "test_user", "password": "Pass1234!"}' -H "Content-Type: application/json"
```
**/test_token** - GET
*token*
```
curl http://localhost:8000/test_token/ -H "Content-Type: application/json" -H "Authorization: token $token"
```

### Endpoints
base URL: http://localhost:8000/api

**/get_data** - GET
```
curl http://localhost:8000/api/get_data/
```
**/get_data_id** - GET, PUT
```
curl http://localhost:8000/api/get_data_id/1/
curl -X PUT http://localhost:8000/api/get_data_id/1/ -d '{"name": "Horse Saddle", "price": "129.00"}' -H "Content-Type: application/json"

```
**/add_item** - POST
```
curl -X POST http://localhost:8000/api/add_item/ -d '{"name": "Pony Spray", "price": "325.50"}' -H "Content-Type: application/json"
```
**/search_name** - PUT
```
curl -X PUT http://localhost:8000/api/search_name/ -d '{"name": "Horse Saddle"}' -H "Content-Type: application/json"
```
**/upload_image** - POST

**/get_wishlist** - GET
```
curl http://localhost:8000/api/get_wishlist/
```
**/add_wishlist_item** - POST
```
curl -X POST http://localhost:8000/api/add_wishlist_item/ -d '{"user": "test", "product": 1}' -H "Content-Type: application/json"
```
**/get_users** - GET
```
curl http://localhost:8000/api/get_users/
```