# Software Services -(Similar to Stack Overflow)

### A Software Community App

#### Table of Content
[Summary](#summary)</br>
[Java -Backend](#datasetGeneration)</br>
[Angular -Frontend](#dataProcessing)</br>
[Database -MySQL](#modelTraining)</br>



### Summary<a name="summary"></a>
In this project I tried to make a small Stack Overflow environment which is supported by Java Spring Boot backend, Angular Frontend and MySQL database. Here the user can search their related queries, answer their realted queries and post some questions in order to get help from other users in the community 
<br/>         


### Java -Backend<a name="datasetGeneration"></a>
Using Java Spring Boot I've created a Rest API which provides some of the functionality like user authentication, posting user questions and putting reply for the same. This API is tested with the postman and connected with the MySQL database through hibernate

<br/> 

### Angular -Frontend<a name="dataProcessing"></a> 
On the fontend, Actually the required data has to be reflected and for this I've made some API calls that was made by the Java backend. Also I've Used bootstrap for styling and making the worklow fast. To run the frontend part create the Angular CLI app with the command ng new software-services and then use npm install bootstrap done some config. related with bootstrap in the desired repo and after this replace the files in src folder with the frontend folder.   

<br/>

### Database -MySQL<a name="modelTraining"></a> 
Backend API is connected with the MySQL database to show the end to end reflection and making the application fast this configuration is done within the application.properties file in backend part. In database there are four tables interconnected with each other to show the desired output on the fontend part.
These tables are for user, queries, related software and reply of users.






### Code Requirements

Ecpllise for JAVA -Backend
nodejs for Angular -Fontend



