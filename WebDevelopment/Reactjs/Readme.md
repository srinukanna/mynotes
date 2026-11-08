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
* This can be useful to wrap js content inside the jsx of any component.
* even we embed objects for inline styling.

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
* Using '#f0f0f0' for background colour of the cards
* embedding cloudinary image from the website in the image src and className as res-logo.
* Card contains data based on swiggy api,we can see that dat using json.viewer as extension in swiggy website.
* Applying aniomations(hover) based on the swiggy website cards.
* here we embed the card component inside the body container where the card component is restaurant container.

```
body.jsx

function body(){
  <Card />
  <Card />
  <Card />
}

```
* we can create multiple card components just by writing the same component card multiple in the body component

### Problem
```
- But, here is the problem with the static or hardcoded data all cards appearing similar.
- So here we introducing props
```

### Props 
* Using the props concept we can sned the data from the parent (Body) component to child (Card) component while rendering parent component.
* now we can create the multiple card components with different data ,similarly like in swiggy website.
* Simply we can say these are the arguments to functions or to child components.
* We can easily send the data dynamically to the card component.

```

```

#### New Problem again 🤧
```
every time we are sending the props manually to every card is ok for few card components but it is difficult for 20-30 cards.
```

* So here introduced new concept




