//External
import axios from "axios";
import { useState } from "react";
import { Routes, Route, RouteMatch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router-dom';

//Pages
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { ProductPage } from "./pages/ProductPage";
import { EntryForm } from "./pages/EntryForm";

//Components
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";

function App() {
  const [items, setItem] = useState<Product[] | null>(null);

  const myEndpoint = "http://127.0.0.1:8000/api/get_data";
  const getItem = () => {
    axios
      .get(myEndpoint)
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/add" element={<EntryForm />} />
          <Route path="/products:id" element={<ProductPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
