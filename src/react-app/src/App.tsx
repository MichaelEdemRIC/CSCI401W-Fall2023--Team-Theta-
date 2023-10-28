import ProductTable from "./components/ProductTable";
import axios from 'axios';
import { useState } from "react";

// Data type of a row
export type Entry = {
  pk: number;
  price: string;
  dateAdded: string;
  name: string;
};

function App() {
  const [items, setItem] = useState<Entry[] | null>(null)
  
  const myEndpoint = 'http://104.131.179.187/api/get_data/';
  const testEndpoint = 'https://jsonplaceholder.typicode.com/todos';
  const getItem = () => {
    axios.get(myEndpoint)
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
