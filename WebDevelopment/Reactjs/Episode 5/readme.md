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

- #### useState() as Solution

- This is the hook as a solution which is react utility function where it schedules a rerender when we update state using its setter and make essential updates to original dom and updating UI done by react.

- If a normal variable changes, that change alone does not tell React to rerender, so the UI won’t automatically update and react introduces powerful concept state management using useState()

- The state variable when created using the useState, it gets updated using the second variable(setter function) and rerender with updating the dom only with specific changes and commit to UI phase.

- The useState is a utility function which returns an array of two values: 
```
the current state value and a setter function for updating state and scheduling a rerender.
```

- While creating state variable we are doing actually array destructuring.

- React is very efficient in dom manipulation with the help of react fiber.Hence it solves the above problem when we update state using the setter, React renders again and applies the required DOM changes.

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
#### useState() behind the scenes

- one is state variable and another one is setter function
  Ex:

```
const [counter,setCounter]=useState(0);
```

- Here counter is a state variable .

- setCounter queues a state update in React's internal memory (Fiber node) and schedules a rerender.

- When the component runs again, useState reads that memory and initialize a brand new const variable with that memory(value) during rerender.

- every state variable value is a snapshot.

##### Breakthrough point

```
React preserves state between renders. Each render creates new const binding, containing that render’s state snapshot(final result during execution). Setters queue changes for a future render, they do not modify the current snapshot.
```
-> Internal memory in react fiber
#### Batching

- Grouping the state updates for scheduling the next render instead of multiple renders.

```
const [count,setCount] = useState(0);
onclick ={
  ()=>{
  setCount(count+1); //(0+1) => 1 // update into a queue
  setCount(count+1); //(0+1) => 1 // update into a queue
  setCount(count+1); //(0+1) => 1 // update into a queue
}}
[1,1,1]->1 final replaced value
Grouped as batch and single render for two ways
onclick ={
  ()=>{
  setCount(prev=>prev+1); //(prev=>prev+1) =>  // update into a queue
  setCount(prev=>prev+1); //(prev=>prev+1)  // update into a queue
  setCount(prev=>prev+1); //(prev=>prev+1)  // update into a queue
}}
[prev=>prev+1,prev=>prev+1,prev=>prev+1]=>[1,2,3]
```

- Now all values which are in queue and they update the value one by one by replacing after executing every line in a loop while iterating queue.

- The setters queue updates during the event handler execution. 

- During the next render, React processes those updates in order to calculate the next state. 

- Replacement values replace the pending state,updater functions calculate a new pending state.

- Atlast, final replaced value assign to new const variable which is created during single rerender.

- constant values directly replaced, where updater functions executed while iterating.

- After that replace the previous values and assiging to new constant variable by single render.

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
 Using its Reconciliation (or diffing) algorithm, React identifies the changes needed to bring the UI up to date.
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

* Once see episode 1 for more clarity.

* React Fiber Architecture is introduced in react 16 and which is very fast for dom manipulation using react diff algorithm.