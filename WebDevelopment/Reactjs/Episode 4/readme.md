# Namaste React

Starting from the episode 4 today!

### Episode 4

- first of all we need to design a webframe
- Because while webframing we will know more about what we are going to build,instead of blindly building.
- while webframing we will design what features are required and how they work it ,we can fix them while webframing.

### Components

- These are nothing but js function we need to export and import whenever our app require those functions.
- Because every function has certain purpose
- Here all the components are render in App component
- Inside the components we use JSX syntax which is similar to html but must wrap

```
<>
</>
```

or

```
any parent tag Container

<div>

</div>
```

### Webframing of our Applayout

```
Header
 - Logo
 - Navbar items
   - Home
   - Contact us
   - login/logout button feature
Body
 - Search
 - Restaurant Container
 Card
   - Restaurant Cards

Footer
 - Copywright
 - Links
   - Contact us
   - Address
```

### Applayout

- now we need to built the above structure along with the components.
- So here we build components based on our before plan
- So first here we build like below

```
    1. Header
    2. Body
    3. Footer
```

- Here important thing is folder structure.
- In this episode entire structure is built using app.jsx

### Component Composition

- Multiple components wrapped inside a single component
- When that one single component rendered inner components also will be rendered.

```
app.jsx

function app(){
 return (
  <>
   <Header />
   <Body />
   <footer />
  </>
 )

}
```

### {}

- This can be useful to wrap js content inside the jsx of any component.
- even we embed objects for inline styling.

```
const color = {
  background : blue
}

function Card(){
  <div className="Restaurant_Card" style ={color}>
}
```

### Fun part 😂 in JSX

```
We can easily write css in js object and can embed using {} in inline css.

```

### Card component

- Using '#f0f0f0' for background colour of the cards
- embedding cloudinary image from the website in the image src and className as res-logo.
- Card contains data based on swiggy api,we can see that dat using json.viewer as extension in swiggy website.
- Applying aniomations(hover) based on the swiggy website cards.
- here we embed the card component inside the body container where the card component is restaurant container.

```
body.jsx

import Card from "./Card";

const Body = () =>{
 return(
    <div className="cardContainer">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>

 )
}
export default Body;

```

### Part-2

- we can create multiple card components just by writing the same component card multiple in the body component

### Problem 😅

```
- But, here is the problem with the static or hardcoded data all cards appearing similar.
- So here we introducing props
```

### Props

- Using the props concept we can send the data(different properties) from the parent (Body) component to child (Card) component while rendering parent component.
- now we can create the multiple card components with different data ,similarly like in swiggy website.
- Simply we can say these are the arguments to functions or to child components.

```
 <Card resName="Meghana Foods" rating="4.4"></Card>
 <Card resName="Hotel Subhani" rating="4.5"></Card>
```

- We can easily send the data dynamically to the component.

#### Props are Read-Only (Immutable):

```
A child component can never change the props it receives from a parent.
```

#### Example

```
const Body = () =>{
 return(
    <div className="cardContainer">
      <Card resName="Meghana Foods" rating="4.4"></Card>
      <Card resName="Hotel Subhani" rating="4.5"></Card>

    </div>

 )
}
export default Body;
```

#### Props internally passed as Nested object to Functional argument

- while sending values from the parent to child all are wrapped into nested objects into a single name as props.

```
props = {
    resName:"Meghana Foods"
    rating:4.4
  }

```

### One way

```
const Card = (props) => {
  props.resName
  props.rating
  {resName,rating} = props
  //directly we can use in the cards with resName,rating instead of using props.resName etc.,..
}
```

(or)

### Object Destructuring(Alternate):

Unpack props in the child component is helpful for writing cleaner code.

```
const Card = ({ resName, rating }) => {

}
```

#### New Problem again 🤧

```
Every time we are sending the props manually to every card ,it is ok for few card components but it is difficult for 20-30 cards.
```

- So here introducing hardcoded data as array of objects which contains restaurant cards data from the availablke swiggy website.

### Config Driven UI

```
Based on the config file ,the backend data will be dictate in the ui how to display,where to display  and when to display in any application.
```

or

```
It is an architectural pattern where configuration files using backend data dynamically dictate how the UI displays, where it displays, and when it displays across the application.
```

For example in Swiggy, Different carousels will be displayed based on the different user locations ,where the localized data(swiggy api) come from the backend dictates(commands) the ui based on config files in the backend.

#### Important point

```
 🤔 A frontend engineer also must know about the backend data ,how the data is coming,organized and how it is configured in the api.simply knowledge of data and api too😎.
```

(or)

```
Ui layer + Data layer = frontend application
```

- Any js related operation we must do inside a {}
- Like string contenation in the img tag inside src

### Data

- In the first time,we changed cards data manually bycopy paste the image url link from the website and also send the card data like name,rating manually to the card
- Now we are taking realtime data array of objects from the swiggy Api using json viewer.

- The below is the child component(Card)

```
 import './Card.css'
function Card({resData}){
    return (
        <>
        <div className="Card">
            <div className="cardImageContainer">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} />
            </div>
            <div className="contentWrapper">
             <h3>{resData.info.name}</h3>
             <h3>Rating:{resData.info.avgRating}</h3>
             <h4>{resData.info.sla.slaString}</h4>
             <h4>{resData.info.cuisines.join(",")}</h4>
             <h4>{resData.info.areaName}</h4>
            </div>

         </div>
        </>
    )
}
export default Card;
```

- Now we can see how the body data below,but in the episode the raw array of objects kept still inside one large app.js instead of separate components.

```
import Card from "./Card";
import restaurants from "../utils/Urls";
const Body = () =>{
 return(
    <div className="cardContainer">
      <Card resData={restaurants[0]}></Card>
      <Card resData={restaurants[1]}></Card>
      <Card resData={restaurants[2]}></Card>
      <Card resData={restaurants[3]}></Card>
      <Card resData={restaurants[4]}></Card>
      <Card resData={restaurants[5]}></Card>
      <Card resData={restaurants[6]}></Card>
      <Card resData={restaurants[7]}></Card>

    </div>

 )
}
export default Body;
```

- Instead of this,going to use map concept directly,so we can directly get the data without manual complexity(i.e hardcoded data) of writing every object data which is present in the restaurant array with indexing.

```
import Card from "./Card";
import restaurants from "../utils/Urls";
const Body = () =>{
 return(
    <div className="cardContainer">
      {
       restaurants.map((res)=>(
         <Card key ={res.info.id} resData={res}></Card>
       )
      )
      }

    </div>

 )
}
export default Body;
```
### Good Practice
* Optional Chaining
```
if (!resData?.info) return null;
safely stop without returning error instead of undefined with error
const {cloudinaryImageId,name,avgRating,sla,cuisines,areaName} =resData.info;

```
- Here most of the members use index as key which is given by js in the map but it is not a good practice.
- React suggests that never use index as a key.
- we need to mention the key everytime otherwise in some elements crashes entire flow and rerenders the whole list by cleaning all
- Even it dont know the position where to keep ,it may keep different by rerendering all the card components
  Ex:

```
<input> tag
```

Better version:

- Some values are not written by my code. They are created later (by the user or by state). Each one is attached to a specific slot, which is a position in the list.

“Default data” vs “memory”

#### Default data:

```
It is what your code writes: {product}, {price}. React rewrites it on every render, so it always matches the current data.
```

#### Memory:

```
It is created after the page loads: typed text, a tick, likes. Your code never wrote it, so React has nothing to rewrite.

“Specific slots”
```

##### without the key the behaviour

```
Yes. Each card position (slot 1, 2, 3) holds its own memory:

Slot	Default data (from code)	Memory (created later)
1	laptop, 40000	text A, ticked, likes 5
2	iphone, 50000	text B, not ticked, likes 0
3	android, 100000	text C, not ticked, likes 0

When you remove the laptop without key:

The default data gets rewritten to match the new list.
The memory stays in its slot, because no code changes it.
```

So slot 1 now has iphone’s default data, but laptop’s memory. That is the bug.

##### Breakthrough points:

- With key, the memory is tied to the product (key), not the slot position. Removing the laptop deletes its memory with it.


One line to remember:
```
Without key, memory belongs to the position. With key, memory belongs to the item.
```

- we can get more info on this with practical when we using useState in 5th episode of Namaste React.

#### For more reading in this episode;
```
index as a key is antipattern - By Robin Pokorny
```
