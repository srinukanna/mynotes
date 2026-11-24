## Episode - 7

### Part - 1
* useEffect different cases
- without using dependency array
- using empty dependency array
- using dependency array with a variable.

### Part - 2
#### Rules when to not write useState
- inside of an if else statement and in loops
- inside functions.
- outside of the body of any component

#### Best practice
- Try to keep at the top of functional component.

### Part - 3
* Introducing the concept routing.
* For this we use npm javascript library known as react router dom.
* To use that library we must install it and we use below command.
```
npm i react-router-dom
```
* check the installation whether it is present in the package.json along with its latest installed version.

```
npm start or npm run dev
```
* Let us create about us page.

* Whenever we have routes we need to create routing configuration.

* For that, we need to import like below:
```
import {createBrowserRouter} from "react-router-dom";
```
* The ```createBrowserRouter ``` will create a routing configuration to us.

* now we are developing a appRouter and pass routing configuration inside createBrowserRouter.

```
const appRouter = createBrowserRouter();
```
#### Routing configuration
* The configuration which define what will happen to specific routes 

```
The information that tells to browserRouter what will happen on specific path.
```
* like load which element to render on specific path or on which page.

* Here,in the createBrowserRouter contains list of routes.


```
const appRouter = createBrowserRouter(
    {
        path:"/",
        element:<App>
    }
)
```
* Here the Home page or page means component composition thats y we say everything component in react.

* About us is also a component lets create a about us component.

* RouterProvider provides the routing configuration to our app

### Single Page Application
* Because there are no multiple pages like different types of html files 
* In react only component renders instead of whole page.
* Thats y it is called Single Page Application.

### Routing
* It is a method to navigate different pages.

There are two types of routing.
```
Client side routing
Server side routing
```
### Client Side Routing

### Server Side Routing
```
 If we click on anchor tag (/about ,/index),after that it make(triggers) a network call to server for the document(about.html) and fetches that html file from the server and renders the output to the webpage through full page reload.
 ```
or
```
Clicking a standard anchor tag (/about, /index) triggers a network request to the server for the new document (e.g., about.html). The server returns the full HTML file, causing the browser to completely reload the page and render the new content from scratch.
```
* 
Ex:
```
Server.html
Index.html
about.html
```
* Sometimes ternary operator gives u error while conditional rendering.
* useParams for dynamic routing as resId
* static routing vs dynamic routing
