## Episode 6
* There was a debate 😅 about monolith vs microservice,we wont dont go now 😂 into that debate.
### Monolith vs microservice architecture

#### Monolith
* Monolith is a big service project which consists of all types of code
* Such as:
    - UI
    - SMS
    - API
    - Authentication code
    - Database

* All the different types of code combined and considered as one single service.So, All the services are in one single repository.

* Small change in one of the code makes the whole project to compile and deploy the project again where it is time consuming frustrating to earlier for fast deadlines.
```
Ex: A simple change in button color will leads to access the db,build,compile and deploy the whole project.
```

#### Microservices
* It consists of independent application as service in the project which didnt disturb the other services if there is any change in one service.

* All are small tiny services communicate with each other based on the usecases to make the app work.

* Examples for independent services
      - UI
      - API
      - Database
      - SMS
      - Authentication

* This is known as separation of concerns or single responsibility principle where each and every service has its own job.

* there are different connections to each service.

* Every service of the team has their own deployment cycle.

* It is fast and most of the present industries using this architecture.

```
How are these services deployed and how can we access these services.
```
* This project comes under UI microservice.

```
How these services communicate with each other ?
```
A. They run on their own specific ports
Example:
```
1234 - UI.      - /  (directed to this URL when we type)
1000 - Backend  - /api
2006 - SMS.     - / sms
All these are mapped/deployed to a single domain like NamasteDev.com.
```
* To get a specific service in the url we use /followed by service name which are redirects to their port.
Example:
```
/SMS
/Backend
```
* If one service connect another service by calling URL like /service or call the port.

Example:
```
UI wants to communicate with the backend by calling the url with /API or call its service port number.
```

### Advantage:

* In monolith everything must be under one techstack,suppose if we have java application we need to keep all the separate codes like authentication,backedn sms all must be in java

* Where as in this one we cam write the code using the different stack such as
  - React for UI service
  - Java for Backend service
  - Golang for SMS service
  - Python for Databases service

- It is said by akshay  when students asked by multiple times like what techstack used for uber he answered indirectly like below 

#### Note:
```
In, Industries,mutltiple tech stack used for single project based on the usecases of different microservices instead of relying on single techstack
```

### Part-2

### Two approaches for fetching the data from the backend
#### First method 
* Rendering the whole component and loads the page.
* We need to make the api call first .
* After that we will get  data  and render the UI
```
in this ,the page will be look empty until the api sends the data to webpage.
```
#### Second method
* Render the whole component and loads the page
* Renders the UI
* Make an api call for data
* Get the data and render the UI

```
In this approach,the user will see instantly skeleton of data(shapes with grey colour shadows) which mitigates original data and then slowly after api sends data,it will rendered on the page.
```

We used to prefer the second method which is best for good user experience.

* React render cycles are very fast even here it renders two times before the api call and after the api call there is no issues to the webpage.

* Hence we can simply say that react has best rendering mechanism.

### Part-3

#### Problem
```
we always used hardcode data in the application
```

#### useEffect()
* To fetch the data dynamically from the api using fetch we use useEffect hook.

* It has two arguments one is callback function and other one is dependency array.

```
 useEffect(()=>{},[])
```                                            
* It will be called ,only after the function will be rendered.

### case - (i):
* without dependency array it will be called for every small change which leads to component render.

### case -(ii):
* with dependency array it will be called only one time after component render 

### case -(iii):
* if the dependency array consists any variable ,whenever the variable state or its data changes the useEffect will be called.

### side effect means in useEffect()
```
 it is a change that is effected from outside the component ,when component is rendered.
 ```
 or
```
 Any operation that reaches outside the component to interact with the external world.
```
- fetching data from an API
- updating the browser's document title, 
- setting a timer or saving to localStorage.

### Problem
* But whenever we fetching the data from the other origin using their api in our local server we will get an error that is CORS policy error issue due to origin mismatch.

* Because the browser will reject to fetch the data from website(server) origin to our localhost (machine server) origin

### To bypass this cors error 
#### Method - 1
- we need to download cors browser extension,mostly this will fail 😂

#### Method - 2 
- we need to safely use "https://proxy.corsfix.com/" before the url of swiggy api.

* Removing mock data restaurant which is imported from mockdata.js under utils folder and initialise with empty array in useState.

* After making an api call while rendering the componnet we will get the data to page.

### Real flow using an empty state 
* Initially page will be empty
* Next,after making an api call,it will sends the data to web page.
* Now the restaurant cards will appeared on the webpage.