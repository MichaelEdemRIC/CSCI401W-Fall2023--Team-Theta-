import ProductTable from "./components/ProductTable";
import axios from 'axios';
import { useState } from "react";

export type Entry = {
  complete: boolean;
  id: number;
  title: string;
  userId: number;
};

function App() {
  const [items, setItem] = useState<Entry[] | null>(null)
  
  //const endpoint = 'http://104.131.179.187/api/students/';
  const endpoint = 'https://jsonplaceholder.typicode.com/todos';
  const getItem = () => {
    axios.get(endpoint)
    .then(response => {
      console.log(response.data);
      setItem(response.data);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <div className="container center-both d-grid gap-2" >
        <button className="btn btn-primary btn-lg" type="button" onClick={(getItem)}>Get Products</button>
        <ProductTable className="table" items={items} />
      </div>
      
    </div>

  );
}

export default App;
