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
# Client Side Routing

## Server Side Routing
```
 If we click on anchor tag (/about ,/index),after thatit make(triggers) a network call to server for the document(about.html) and fetches that html file from the server and renders the output to the webpage through full page reload.
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
