import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My bug problems have been fixed</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


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
