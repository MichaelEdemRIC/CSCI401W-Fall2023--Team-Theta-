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

### Interact with User/Admin only endpoints
- in the http request, you must include an authorization header formatted as "token (user's token id here)". 
- when using curl, this header is added as -H "Authorization: token $token" where $token is replaced with a valid token id. for admin only endpoints, this id must be the admin's

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

**/test_user_token** - GET
*token*
```
curl http://localhost:8000/test_user_token/ -H "Content-Type: application/json" -H "Authorization: token $token"
```
**/test_admin_token** - GET
*token*
```
curl http://localhost:8000/test_admin_token/ -H "Content-Type: application/json" -H "Authorization: token $token"
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
```
**/add_item** - POST
```
curl -X POST http://localhost:8000/api/add_item/ -d '{"name": "something", "amzMSRP": 4.50, "amzCurrentPrice": 3.50, "walMSRP": 4.99, "walCurrentPrice": 3.98, "lowestPrice": 3.50, "amzURL": "https://www.amazon.com/something", "walURL": "https://www.walmart.com/something"}' -H "Content-Type: application/json" -H "Authorization: token $token"

curl -X POST http://localhost:8000/api/add_item/ -F "name=Product Name" -F "amzMSRP=10.00" -F "amzCurrentPrice=8.50" -F "walMSRP=12.00" -F "walCurrentPrice=9.50" -F "lowestPrice=8.50" -F "amzURL=http://amazon.com/product" -F "walURL=http://walmart.com/product" -F "img=@./image.jpg" -H "Content-Type: multipart/form-data" -H "Authorization: Token $token" 
```
**/update_item** - PUT
```
curl -X PUT http://localhost:8000/api/get_data_id/1/ -d '{"name": "something", "amzMSRP": 4.50, "amzCurrentPrice": 3.50, "walMSRP": 4.99, "walCurrentPrice": 3.98, "lowestPrice": 3.50, "amzURL": "https://www.amazon.com/something", "walURL": "https://www.walmart.com/something"}' -H "Content-Type: application/json" -H "Authorization: token $token"
```

**/search_name** - PUT
```
curl -X PUT http://localhost:8000/api/search_name/ -d '{"name": "Horse Saddle"}' -H "Content-Type: application/json"
```
**/get_users** - GET
```
curl http://localhost:8000/api/get_users/ -H "Authorization: token $token"
```

### Wishlist Endpoints
base URL: http://localhost:8000/api

**/get_wishlist** - GET
```
curl http://localhost:8000/api/get_wishlist/ -H "Authorization: token $token"
```
**/add_wishlist_item** - POST
```
curl -X POST http://localhost:8000/api/add_wishlist_item/ -d '{"product_id": 1}' -H "Content-Type: application/json" -H "Authorization: token $token"
```
**/get_user_wishlist** - GET
```
curl http://localhost:8000/api/get_user_wishlist/ -H "Content-Type: application/json" -H "Authorization: token $token"
```