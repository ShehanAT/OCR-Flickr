# Capstone Project

### Overview 
* Communicates with Flickr Api and Microsoft Cognitive Services Api to allow the user to search images on Flickr then click on one image in order to extract any potential words in it then display it to the user.
* Built using the MEAN stack
* Public version of the app on: https://fathomless-refuge-88305.herokuapp.com
* Built registration and login funtionality using Passport, expressjwt and implemented hashing and salting of passwords. This app does not store actual passwords in the MongoDB database for security reasons.


### Instructions for running locally:
* Add your Flickr api key and Flickr api secret to ```keys.js``` file in the ```./api/config``` folder, get a key and secret [here](https://www.flickr.com/services/api/keys/apply/)
* Add your Microsoft Azure Cognitive Services Computer Vision api key to ```keys.js``` file in the ```api/config``` folder, get an api key [here](https://azure.microsoft.com/en-ca/try/cognitive-services/) (Make sure to get a computer vision api key)
* Run ```mongod``` 
* Run ```npm install```<br>
* Run ```npm start```<br>




### Project Logs:<br>
new plan: create empty img tags with (click) and add src dynalyy = done<br>
next step = setup computer vision api with sample url from app = done<br>
next step = config permissions(must login to use api's) = done<br>
next step = create register form duplicate value error validation for username, email fields(in the process of remaking register component) = done
next step = show login error on invalid crendentails, make login and register forms pretty






