import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to='#Home'>Home</Link>
      <Link to='#About'>About</Link>
      <Link to='#Work'>Work</Link>
      <button><a href="#"></a>Resume</button>
    </nav>
    <section id='Home'>
      <h1>This is home page</h1>
      <img src="https://i.pinimg.com/736x/2e/bd/db/2ebddb368d04266ec74a8ceb2f1e34bf.jpg" alt="homepgimg" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad.</p>
    </section>
    <section id='About'>
      <h1>This is About page</h1>
      <img src="https://i.pinimg.com/736x/00/b9/01/00b901c29a3e37896a2579cd10e9b0eb.jpg" alt="aboutpgimg" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad.</p>
    </section>
    <section id='Work'>
      <h1>This is Work page</h1>
      <img src="https://i.pinimg.com/564x/be/f7/47/bef74704b4bee0c18912c3e718bc1297.jpg" alt="workpgimg" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ad.</p>
    </section>
    
    </BrowserRouter>
    </>
  );
}

export default App
