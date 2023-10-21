
import ListGroup from "./components/ListGroup";
import axios from 'axios';
import { useState } from "react";
function App() {
  let items = ['New York','San Francisco','Tokyo','London','Paris']; // FETCH ITEMS FROM BACKEND HERE
  const [item, setItem] = useState('')
  
  const getItem = () => {
    axios.get('http://104.131.179.187/api/students/')
    .then(response => {
      console.log(response.data[0].name)
      setItem(response.data[0].name)
      
    }).catch(err => {
      console.log(err)
    })
  }
  

  return (
    <div className= "align-middle">
    <div className="text-center">
    <button className="btn btn-primary" type="button" onClick={(getItem)}>Get Product</button>
      {item && <h1>{item}</h1>}
    </div>
    </div>
  );
}

export default App;
