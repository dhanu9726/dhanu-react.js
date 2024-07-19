import logo from './logo.svg';
import './App.css';
import Post from './post';
// './component/post';
import {  useState} from 'react';

function App() {
  const [toggle,settoggle]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>settoggle(!toggle)}>
        {toggle?"Conceal":"Get Post"}
      </button>
      {
        toggle ? <Post />:""
      }
    </div>
  );
}

export default App;
