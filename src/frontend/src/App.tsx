//External
import axios from 'axios'
import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"

//Pages
import { Home } from "./pages/Home"
import { SearchResults } from "./pages/SearchResults"
import { Product } from "./pages/Product"

//Components
import ProductTable from "./components/ProductTable"
import ProductInput from "./components/ProductInput"
import { Navbar } from "./components/navbar"

// Data type of a row
export type Entry = {
  pk: number;
  price: string;
  dateAdded: string;
  name: string;
};

function App() {
  const [items, setItem] = useState<Entry[] | null>(null)
  
  const myEndpoint = 'http://127.0.0.1:8000/api/get_data';
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
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product" element={<Product />} />
        </Routes>
        <div className="container center-both d-grid gap-2" >
          <button className="btn btn-primary btn-lg" type="button" onClick={(getItem)}>Get Products</button>
          <ProductTable className="table" items={items} />
          <ProductInput />
        </div>
        
      </Container>
    </>
  );
}

export default App;
