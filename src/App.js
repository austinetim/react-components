// import logo from './logo.svg';
// import './App.css';

//const { findAllInRenderedTree } = require("react-dom/test-utils");

// function App() {
//   return (
//     <div className="App">
//       <h1>My bug problems have been fixed</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// export function App(props) {
//   return (
//    <h1>(props.title)</h1>
//   );
// };

// export default App;

// //Nav component
// function Nav() {
//   return (
//     <nav className = "main-nav">
//       <ul>
//       <li>Home</li>
//       <li>Article</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul> 
//     </nav>
//   );
// };

// export default Nav;

// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Main from './components/Main';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Header name = 'Anna' color = 'Purple' />
//       <Main greet = "Howdy" />
//       <Sidebar greet = "Hi" />
//     </div>
//   )
// }

//JSX component syntax

//function Nav(props) {
  //   return (
  //     <nav className = "min-nav">
  //       <ul>
  //       <li>{props.first}</li>
  //       <li>{props.second}</li>
  //       <li>{props.third}</li>
  //       <li>{props.fourth}</li>
  //     </ul> 
  //     </nav>
  //   );
  // };
  //export default Nav;

  // function Jsxlist(){
  //   return(
  //     <ul>
  //       <li>{'He' + "llo"} </li> 
  //       <li>{2}</li>
  //       <li>{2 * 2}</li>
  //       <li>{16 / 2} </li>
  //     </ul>
  //   );
  // }

  // //your js functionality runs in the curly braces i.e it serves as the js environ.

  // export default Jsxlist;


// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Main from "./components/Main";
// //import './App.css';
// import './index.css'

// export default function App() {
//   return (
//     <div className= "App" >
      
//       <Header  />
//       <div>
//        <Main userName = 'Mack' num = {5} />
//        <Sidebar greet = "Hi" />
//       </div>
      
//     </div>
//   );
// }


//Embedding attributes

// function formatName(  firstName, surname){
//   return firstName + " " + surname;
// }
// //function call using JSX
// const result = <p>{result('Jane', 'Wilson')}</p>

// const url = 'photo.png';
// const result2 = <img src = {url} ></img>

//MORE EXAMPLES

// import avatar from './avatar.png';
// function Logo(props){
//   const userPic = <img src = {avatar}></img>;
//   return userPic;
// }

// function App(){
//   return(
//     <div>
//       <h1>Hello World!</h1>
//       <Logo/>
//     </div>
//   );
// }
// export default App;

//EVENTS HANDLING
// import Btn from './Btn';
// import './App.css';
// function Btn(){
//   const clickHandler = () => console.log('clicked')
//   return(
//     <button onClick = {clickHandler}>
//       Click me
//     </button>
//   );
// }

// export default Btn;

// function Btn(){
//   const clickHandler = () => console.log('onMouseOver')
//   return(
//     <button onClick = {clickHandler}>
//       Click me
//     </button>
//   );
// }

// export default Btn;

//Parent-child relatonship
// import React from 'react';
// import Child from './Child';
// import './App.css';
// function App(){
//   const date = new Date();

//   return(
//     <div>
//       <Child message = {date.toLocaleTimeString}/>
//     </div>
//   );
// }

// export default App;

//------------HOOKS-----------------//

//WORKING WITH STATES

// import React, {useState} from 'react';
// import Heading from './Heading';
// import './App.css';

// function App(){
//   const [word, setWord] = React.useState('Eat')

//   function handleClick(){
//     setWord('Drink')
//   }
  
//   return (
//     <div className='App'>
//       <Heading message = {word + " at Little Lemon"}/>
//       <button onClick = {handleClick}> Click here</button>
//     </div>
//   );
// }
// export default App;

//A HEALTHY EATING APP

//App component

// //...
//    return (
//     <div className="App">
//       <Counter />
//       <MealsList />
//     </div>
//    )
 

//WORKING WITH REACT NAVIGATIONS

// import Homepage from './Homepage';
// import AboutMe from './AboutMe';
// import './App.css';
// import {Routes, Route, Link} from 'react-router-dom';

// function App(){
//   return (
//     <div className='App' >
//       <nav className='nav'>

//         <Link to = "/" ClassName= "nav-item" >Homepage</Link>
//         <Link to = "/about-me" ClassName= "nav-item" >About Me</Link>

//       </nav>

//       <Routes>
//            <Route path = '/' element = {<Homepage/>} />
//            <Route path = '/about-me' element = {<AboutMe/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// WORKING WITH VIDEOS AND AUDIOS
// import './App.css';
// import ReactPlayer from "react-player";

// function App(){ 
//   const vidUrl = "https://www.facebook.com/100090031736133/videos/1016855909414767/"
//   return(
//     <div>
     
//       <h1>React player example</h1>
//       <ReactPlayer 
//         url = {vidUrl}
//         playing = {false}
//         volume = {0.5}
//       />

//     </div>
//   );
// }
// export default App;

//CODING A WALLET BALANCE APPLICATION

// import {useReducer} from 'react';
// const reducer = (state, action ) =>{
//   if(action.type === 'ride') return {money: state.money + 10};
//   if(action.type === 'fuel') return {money: state.money - 10};
//   return state;

// }

// function App(){

//   const initialState = {money : 100};
//   const [state, dispatch] = useReducer(reducer, initialState);

//   if(state.money < 0 || state.money === 0) {
//     return (
//       <div className='App'>
//         <h1>Wallet : Not enough balance</h1>
  
//         <div>
//           <button onClick={() => dispatch({type: 'ride'})} >
//             A new customer!
//           </button>
  
//           <button >
//             Refill the tank!
//           </button>
//         </div>
//       </div>
//     );


//   }
//   else{
//     return (
//       <div className='App'>
//         <h1>Wallet : {state.money}</h1>
  
//         <div>
//           <button onClick={() => dispatch({type: 'ride'})} >
//             A new customer!
//           </button>
  
//           <button onClick = {() => dispatch({type: 'fuel'})}>
//             Refill the tank!
//           </button>
//         </div>
//       </div>
//     );
//   }

 
// }
// export default App;

//DATE AND DAY MESSAGE APPLICATION

// function App(){
//   const time = new Date();
//   const day = time.toLocaleString("en-us", {weekday: 'long'});
//   const morning = time.getHours() >= 6 && time.getHours() <= 19;
//   let dayMessage;

//   if(day.toLowerCase() === "monday" ){
//     dayMessage = `Happy ${day}`;
//   }else if(day.toLowerCase() === "tuesday"){
//     dayMessage = `${day}, four days to go`;
//   }else if(day.toLowerCase() === "wednesday"){
//     dayMessage = `${day}, half way there`;
//   }else if(day.toLowerCase() === "thursday"){
//     dayMessage = `${day}, start planning the weekend`;
//   }else if(day.toLowerCase() === "friday"){
//     dayMessage = `woo-hoo, the weekend is coming`;
//   }else{
//     dayMessage = "Stay calm and keep having fun";
//   }

//   return (

//     <div className="App">
//       <h1>{dayMessage}</h1>

//       {morning ? "Have you taken breakfast?" : "What have you been able to achieve today?"}

//     </div>
//   );
// }

// export default App;


//USING THE MAP() METHOD

// const data = [
//   {
//     id: '1',
//     title: 'Tiramisu',
//     description: 'The best tiramisu in town',
//     image: 'https://picum.photos/200/300/?ramdom',
//     price: '$5.00',
//   },

//   {
//     id: '2',
//     title: 'Lemon Ice Cream',
//     description: 'Mind blowing taste',
//     image: 'https://picum.photos/200/300/?ramdom',
//     price: '$4.50',
//   },

//   {
//     id: '3',
//     title: 'Chocolate mousse',
//     description: 'Unexplored flavour',
//     image: 'https://picum.photos/200/300/?ramdom',
//     price: '$6.00',
//   },
// ];

// export default function App(){
//   const listItems = data.map(dessert => {
   
//       const itemText = `${dessert.title} - ${dessert.price}`
//       return <li>{itemText}</li>
      
// //return{

// //      content: `${dessert.title} - ${dessert.description}`,
// //      price: dessert.price,

// //    }
//   })
// //  console.log(topDesserts);
//   return (
//     <div>
//       <ul>{listItems}</ul>
//     </div>
//   );
//}

//TO-DO-LIST APPLICATION


// import {useState} from 'react';

// const ToDo = props =>(
//   <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>
//     <td>
//       <input/>
//     </td>
//     <td>
//       <label>{props.createdAt}</label>
//     </td>

//   </tr>
// );
// function App(){
//   const [todos, setTodos] = useState([{
//     id: 'todo1',
//     createdAt: '18:00',
//   }, {
//     id: 'todo2',
//     createdAt: '20:30'
//   }]);

//   const reverseOrder = () => {
//     // Reverse is a mutative operation, so we need to create a new array type first.
//     setTodos([...todos].reverse());
//   }

//   // First example with keys, show browser console to see the warning.

//   return (
//     <div>
//       <button onClick = {reverseOrder}>Reverse</button>
//       <table>
//         <tbody>
//           {todos.map((todo, index ) => (
//             <ToDo key = {todo.id} id = {todo.id} createdAt = {todo.createdAt} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
// export default App;

//FORM CONTROL - CONTROLLED COMPONENTS

// import { useState } from "react";
// import './App.css';

// function App(){

//   const [name, setName] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName('');
//     console.log('form submitted')
//   }
//   return(
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <div className="form-control">
//           <label htmlFor="name">Name:</label>
//           <input 
//            id = 'name'
//            value = {name}
//            name="name"
//            placeholder="Name"
//            type="text"
//            onChange={e => setName(e.target.value) }
//           />
//           </div>
//           <button disabled = {!name} type="submit">Submit</button>

//         </fieldset>
//       </form>
//     </div>
//   );
// }
// export default App;

//CREATING A FEEDBACK FORM

// import { useState } from "react";
// import './App.css';

// function App(){

//   const [score, setScore] = useState("10")
//   const [comment, setComment] = useState("")
//   const handleSubmit = (e) =>{
//     e.preventDefault();

//     if(Number(score) < 5 && comment.length < 10){
//       alert('please provide a comment explaining why the experience was poor.')
//       return;
//     }

//     console.log('Form submitted')

//     setScore("10");
//     setComment("");


//   }

//   return (
//     <div className="App">
//       <form onSubmit = {handleSubmit}>
//         <fieldset>
//           <h1>Feedback form</h1>
//           <div className="field">
//             <label>
//               Score: 
//               {score}
//               </label>
//             <input
//             type="range"
//             min= '0'
//             max= '10'
//             value = {score}
//             onChange= {(e)=> setScore(e.target.value)}
//             />
//           </div>
//           <div className="form">
//             <label>Comment:</label>
//             <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
//           </div><button type="submit">Submit</button>


//         </fieldset>
//       </form>

//     </div>
//   )
// }
// export default App;

// CREATING A BLOG APPLICATION

// import './App.css';
// import { UserProvider, useUser } from './components/UserContext';

// const LoggedInUser = () => {
//   const {user} = useUser();
//   return(
//     <p>
//        Hello <span className='username'>{user.name}</span>
//     </p>
//   );
// }

// const Header = () => {
//   return(
//     <header>
//       <h2>Blog App</h2>
//       <LoggedInUser />
//     </header>
//   );
// }

// const Page = () =>{
//   const {user} = useUser();
//   return(
//     <div>
//       <h2>What is Lorem ipsum?</h2>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//         Beatae dolor facilis iure hic, repellendus earum ducimus fugit.
//         Atque iusto placeat aspernatur veritatis! Veritatis ipsam dicta
//         laudantium eligendi doloribus, soluta modi.
//       </p>
//       <p>Written by {user.name}</p>
//     </div>
//   );
// };

// function App(){
//   return(
//     <div className='App'>
//       < Header />
//       <Page />
//     </div>
//   );
//   }

// function Root(){
//   return(
//     <UserProvider>
//       <App />
//     </UserProvider>
//   );
// }

// export default Root;




function App(){
  const myName = "Davie Ajala Timothy"
  return(
    <h1>Hello, {myName}</h1>
  )
}
export default App;