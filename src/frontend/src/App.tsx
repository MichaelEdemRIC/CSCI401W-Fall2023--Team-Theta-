//External
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//Pages
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { ProductPage } from "./pages/ProductPage";
import { EntryForm } from "./pages/EntryForm";

//Components
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults  />} />
          <Route path="/add" element={<EntryForm />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
