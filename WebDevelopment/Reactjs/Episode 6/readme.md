## Episode 6

- There was a debate 😅 about monolith vs microservice,we wont dont go now 😂 into that debate.

### Monolith vs microservice architecture

#### Monolith

- Monolith is a big service project which consists of all types of code
- Such as:
  - UI
  - SMS
  - API
  - Authentication code
  - Database

- All the different types of code combined and considered as one single service.So, All the services are in one single repository.

- Small change in one of the code makes the whole project to compile and deploy the project again where it is time consuming frustrating to earlier for fast deadlines.

```
Ex: A simple change in button color will leads to access the db,build,compile and deploy the whole project.
```

#### Microservices

- It consists of independent application as service in the project which didnt disturb the other services if there is any change in one service.

- All are small tiny services communicate with each other based on the usecases to make the app work.

- Examples for independent services - UI - API - Database - SMS - Authentication

- This is known as separation of concerns or single responsibility principle where each and every service has its own job.

- there are different connections to each service.

- Every service of the team has their own deployment cycle.

- It is fast and most of the present industries using this architecture.

```
How are these services deployed and how can we access these services.
```

- This project comes under UI microservice.

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

- To get a specific service in the url we use /followed by service name which are redirects to their port.
  Example:

```
/SMS
/Backend
```

- If one service connect another service by calling URL like /service or call the port.

Example:

```
UI wants to communicate with the backend by calling the url with /API or call its service port number.
```

### Advantage:

- In monolith everything must be under one techstack,suppose if we have java application we need to keep all the separate codes like authentication,backedn sms all must be in java

- Where as in this one we cam write the code using the different stack such as
  - React for UI service
  - Java for Backend service
  - Golang for SMS service
  - Python for Databases service

* It is said by akshay when students asked by multiple times like what techstack used for uber he answered indirectly like below

#### Note:

```
In, Industries,mutltiple tech stack used for single project based on the usecases of different microservices instead of relying on single techstack
```

### Part-2

### Two approaches for fetching the data from the backend

#### First method

- Rendering the whole component and loads the page.
- We need to make the api call first .
- After that we will get data and render the UI

```
in this ,the page will be look empty until the api sends the data to webpage.
```

#### Second method

- Render the whole component and loads the page
- Renders the UI
- Make an api call for data
- Get the data and render the UI

```
In this approach,the user will see instantly skeleton of data(shapes with grey colour shadows) which mitigates original data and then slowly after api sends data,it will rendered on the page.
```

We used to prefer the second method which is best for good user experience.

- React render cycles are very fast even here it renders two times before the api call and after the api call there is no issues to the webpage.

- Hence we can simply say that react has best rendering mechanism.

### Part-3

#### Problem

```
we always used hardcode data in the application
```

#### useEffect()

- To fetch the data dynamically from the api using fetch we use useEffect hook.

- It has two arguments one is callback function and other one is dependency array.

```
 useEffect(()=>{},[])
```

- It will be called ,only after the function will be rendered.

### case - (i):

- without dependency array it will be called for every small change which leads to component render.

### case -(ii):

- with dependency array it will be called only one time after component render

### case -(iii):

- if the dependency array consists any variable ,whenever the variable state or its data changes the useEffect will be called.

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

- But whenever we fetching the data from the other origin using their api in our local server we will get an error that is CORS policy error issue due to origin mismatch.

- Because the browser will reject to fetch the data from website(server) origin to our localhost (machine server) origin

### To bypass this cors error

#### Method - 1

- we need to download cors browser extension,mostly this will fail 😂

#### Method - 2

- we need to safely use "https://proxy.corsfix.com/" before the url of swiggy api.

### async await

- we used async function to fetch the data using await keyword instead of using traditional promises .then .catch or try-catch.

- After making an api call while rendering the component we will get the data to page.

- Here,the function is wrapped in the useEffect as a side effect.

### Real flow using an empty state

- Initially page will be empty when the body is rendered
- Next,after making an api call,it will sends the data to web page and the body again rendered.
- Now the restaurant cards will appeared on the webpage.

### Good Practices

- Optional Chaining

```
setRestaurant(json?.data?.cards[4]?.card?.card?.infowithStyle.restaurants)
It gives an empty array instead of null or undefined.
```

- Cleaning mock data

```
Removing mock data of restaurant which is imported from mockdata.js under utils folder and initialise with empty array in useState.
```

- Use only swiggy api where we get live data instead of using mockdata.

#### Part-4

- Intially body is empty while rendering before making an api call.
- Instead of showing empty beforing making an api call and loading data to the webpage we need to some optimization for user experience.

### Method - 1

- loading text on screen before the api call
  like,

```
if(restaurants.length === 0){
  return <h1> Loading </h1>
}
```

- But it is not a good way to show loading text on screen or spinner before rendering the data on to the page.

### Good Industry Practice

#### Shimmer UI

- It is the skeleton of actual UI, where user can simply a assume real ui before the real data rendering on to the webpage instead of boring loading screen

- Simply we load the fake page until we get the api data to the webpage.

### Part - 5

#### Conditional Rendering

```
Render the UI on the page based on the condition here we render the page with ui only after api sends the data and before the original ui the shimmer UI will be displayed.
```

#### Login/Logout In Header

- For indepth understanding of useState ,he used this also as one of the example.

- First he used to start with local variable and then changed with creating useState variable.

```
const [btnName,setBtnName]=useState("");
<button onClick={
  ()=>{setBtnName(Logout)}
}>{btnName}</button>
```

- When btnName updates using setter function automatically here ,it rerender the header component and all the updated values there.

- To demonstrate this we used

```
console.log("header Rendered");
```

before the return statement of header component.

```
setter function updates ,whole header also rerendered
```

- React reconcilation happens at the same time using react fiber very fast during rerendering within seconds.

### Indepth explanation of useState()

```
Everytime here new const variable is created and updated using useState whenever component is called or rendered.
```

- Also explained,When and how the data is updated using setter function of login state variable with the help of react reconcilation(diff algorithm) by comparing old virtual dom with new virtual dom.

- After that, finding the diff and updating the real dom with only essential changes to the real dom using entire code example of component in the video.

- So every time in the button changes login to logout or logout to login whole process will be done very fast during rendering.

```
<button onClick={
  btnName === "Login" ?
  setBtnName("Logout") : setBtnName("Login")
}>
```

- Thats y react is very powerful framework and efficient in fast dom manipulation.

### Part - 6

- Now we are going to implement search Functionality.

```
const [searchText,setSearchText]= useState("");
<input placeholder="Enter the search" value={searchText}
<button onClick={()=>(
  console.log(searchText)
)}
```

### Problem 🥲

```
here we are unable to type anything after typing any text in the input box even want to see the message in the console.
```

- Because it is controlled by react where it is only updated using setter function.

- It is also known as controlled component.

- Whenever there is a change in useState variable using setter function it will triggers a reconcilation cycle again.

### Interesting Thing 🤔

```
even we type single letter in the input it will again trigger a reconcilation cycle or render the component.
```

- so if we type 100 letters in the input box,the component will triggered 100 times along with reconcilation very fast for every trigger.


#### Filtering problem 🙃

```
But here when we click search again for another card nothing appearing on the screen
```

- In this , old state variable gets updated everytime after clicking search button data will be filtered and the filtered data replaces the original data in restaurant state variable.

- So,after searching again in the input box by clicking the search button we wont see anything on the webpage.

- beacuse the new search want to find the data which is in the earlier old data not in the filtered data .

- so immediate mapping in the filtered data leads to empty screen.

```
only we used listOfRestaurants and modifying every time for filtering and transorming the data at a time.
```

### Problematic code

```
const [listOfRestaurants,setListOfRestaurants]=useState([]);
<div className="searchContainer">
<input type="text" className="search-box"
value={searchText} onChange={(e)=>{
setSearchText(e.target.value);}}/>
<button className="searchBtn" onClick={()=>{
          const filtered = restaurant.filter((res)=>(
res.info.name.toLowerCase().includes(searchText.toLowerCase().trim())))
          setListOfRestaurant(filtered);
          setSearchText("");
          }}>Search</button>
      </div>

<div className="cardContainer">
        {restaurant.map((res) => (
          <Card key={res.info.id} resData={res}></Card>
        ))}
      </div>
    </>

export default Body;

```

### Even for top rated restaurants button

```
<div className="filter">
  <button
          className="filter-btn"
          onClick={() => {
            let filterrestaurants = restaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filterrestaurants);
          }}
        >
          Top rated restaurants
        </button>
</div>

<div className="cardContainer">
        {restaurant.map((res) => (
          <Card key={res.info.id} resData={res}></Card>
        ))}
      </div>
</>

```

#### Solution

- Hence,we created a separate state variable as filteredRestaurant.

- even we fixed the bug for second search in the filtered data.

### Part - 7
### Again problem

- Intially it is empty after creating new state variable

``` 
const [filteredRestaurant,setFilteredRestaurant] = useState([]);
```

- Because  the  new state variable it is initialised as empty without storing incoming api data in useEffect and immediately mapping.

```
const [filteredRestaurant,setFilteredRestaurant] = useState([])
const [searchText,setSearchText]= useState("");
useEffect(() => {
    async function fetchData() {
    const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
    const json = await data.json();
setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    fetchData();
  }, []);

  ```

-  so we updated the data which is from the api using setter function like old restaurant state variable.

```
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
```

-  we again used optional chaining using setter and render the original data normally for  during render.



#### Solution code

```
const [filteredRestaurant,setFilteredRestaurant] = useState([])
const [searchText,setSearchText]= useState("");
useEffect(() => {
    async function fetchData() {
    const data = await fetch(
        "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
    const json = await data.json();
setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    fetchData();
  }, []);


<input placeholder="Enter the search" value={searchText} onChange={(e)=>{
  setSearchText(e.target.value)
}}>

<button onClick={()=>{
const filtered = restaurant.filter((res)=>(
res.info.name.toLowerCase().includes(searchText.toLowerCase())
))
setFilteredRestaurant(filtered);
setSearchText("");
}}> Search </button>

<div className="filter">
  <button
          className="filter-btn"
          onClick={() => {
            let filterrestaurants = restaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filterrestaurants);
          }}
        >
          Top rated restaurants
        </button>
</div>
<div className="cardContainer">
        {filteredRestaurant.map((res) => (
          <Card key={res.info.id} resData={res}></Card>
        ))}
      </div>
</>

```

* Once check controlled vs uncontrolled components
