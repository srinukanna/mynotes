# Namste React

## Episode 5

- In this episode,starting we need to keep a particular good folder structure instead of relying of all components in a single file.

- Cleaning up all the mess and unnecessary data.

### Folder Structure

- We need to arrange different components in different files,because there are no of components in future while scaling to production level for any application.

- File name should be same as component name and first letter should be capital.

- Update the paths after rearranging the components into different otherwise we will get error.

Ex:

```
Header.jsx
Body.jsx
Card.jsx
Footer.jsx
```

- Keep the urls and which are hardcoded data kept under utils folder as 'urls.jsx'.
  ex:

```
Urls.jsx

```

- React makes u write less do great.

- Any framework or library trying makes us want to write production scale applications within less time by combining ui and data layer

- There is no recommended folder structure by react, any developer can make their own clean folder structure for the project.

#### Note:

```
import Header from './Components/Header((.js/jsx) or no extension also fine)
```

### Good practice

- without keeping any extension while importing component.
- Never keep any hardcoded in our component and maintain a separate file for hardcoded data.

Example:

```
Array of objects
img and logo src urls
```

- Check all the imports and exports because to get rid of undefined errors after proper restructuring our folder structure.

#### Popular folder structures

```
1. Grouping based on features or routes

2. Grouping based on file types
```

In this project im using based on file types like grouping the files based on the type.

### Most Javascript libraries ultimate thing

```
Whenver the data changes immediately ui layer also changes
```

### Import and exporting the components

- export

```
 export default <component name>
```

- when there are multiple exports we need to use named exports.

```
export const component;
```

- import

```
  import <component> from <path>
```

for named export we need to import like below or above

```
import {component} from path
```

### Good practice

- Every component should not exceed 100 lines in component file.

## Part-2

- Starting making the website as dynamic
- By started making a feature using filter i.e top rated restaurants.
- React Hooks are nothing but javascript utility functions which has specific purpose.
- Also introduced event handlers in part-2 used Onclick and just normally discussed about onMouseover.

```
import Card from "../Card/Card";
import restaurants from "../../utils/mockData";
const Body = () =>{
 return(
     <>
     <div className="filter">
      <button className="filter-btn" onMouseOver={()=>{
        let filterrestaurants=restaurants.filter((res)=>(res.info.avgRating > 4.5));
        console.log(filterrestaurants);
      }

      }>Top rated restaurants</button>
     </div>
     <div className="cardContainer">
      {
       restaurants.map((res)=>(
         <Card key ={res.info.id} resData={res}></Card>
       )
      )
      }

    </div>
</>

 )
}
export default Body;
```

- removed mockup data and kept only two sample cards to show the difference between js variable and state variable

#### Problem 😩

```
 In the two sample cards,when we use to filter them with a button using normal variable it cant update the ui even it is updated onclick which is in the button filter logic above.
```

### useState()

- This is the hook as a solution which is react utility function where it rerenders everytime when there is change in the variable and make essential updates to original dom and updating UI.


- If the normal variable changes ,the ui wont change and react introduces powerful concept state management using useState()

- The state variable when created using the useState, it gets updated using the second variable and rerender with updating the dom only with specific changes and commit to UI phase.

- The useState is a utility function which returns an array of two variable one is for initialising and another one is for rerendering and updating the ui.

- While creating state variable we are doing actually array destructuring.

- React is very efficient in dom manipulation with the help of react fiber.Hence it solves the above problem whenever the data changes it immediately change UI using Usestate.

```
React fiber introduced in react 16.
```

#### Note:

```
Must be good at js basics when to use let or const while applying map or filter be careful😅.
```

- To use useState we must import it

```
import {useState} from "react"
```

- Somebody would wrote as named export thats y we are importing like that.
- We can in the nodemdoules under the react folder exported.

```
once check module.exports too
```

### React reconcilation

- Like, after creating virtual dom compare with old virtual dom and update essential changes to real dom
- The algorithm also known as React Reconcilation.

### Render

```
 it is just creating a virtual dom whenever any update or state change done to the component.
```

- After using react reconcilation update the UI.

### Lifecycle of React

##### Triggering a Render

React initiates this process in two main situations:

```
• Initial Render. When the application first starts up and mounts the root component.
• Re-renders. When a component's state changes (via useState or useReducer) or its parent component re-renders.
```

##### The Render Phase (Virtual DOM Creation)

- Calling Components:

```
React calls your component function to generate a lightweight JavaScript object representation of the UI, often referred to as the Virtual DOM (or React Element tree)
```

- Pure Calculation:

```
This step is purely a calculation in memory and does not change anything visible on the user's screen yet.
```

##### Reconciliation (Diffing)

• Comparing Trees.

```
React takes the newly generated Virtual DOM tree and compares it against the previous Virtual DOM tree from the last render.
```

• Finding Differences.

```
 Using its Reconciliation (or diffing) algorithm, React identifies the exact minimum number of changes needed to bring the UI up to date.
```

##### The Commit Phase (Updating the Real UI)

- Applying Changes:

```
Once React knows what changed, it enters the Commit Phase and applies only those specific updates to the actual browser DOM.
```

- Browser Paint:

```
 After React updates the real DOM, the browser repaints the screen so the user sees the new UI.
```
