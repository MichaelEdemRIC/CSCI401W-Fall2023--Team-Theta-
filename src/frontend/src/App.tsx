//External
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
//Pages
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { ProductPage } from "./pages/ProductPage";
import { EntryForm } from "./pages/EntryForm";
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import ForgetPasswordPage from './pages/ForgetPaswordPage.tsx';
import LoginHomePage from './pages/LoginHomePage.tsx';

//Components
import { Navbar } from "./components/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
function App() {
  return (
    <WishlistProvider>
    
      <Navbar />

      <Container className="mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults  />} />
          <Route path="/add" element={<EntryForm />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/forget-password" element={ <ForgetPasswordPage /> } />
          <Route path="/home" element={ <LoginHomePage /> } />
      
        </Routes>
      </Container>
    </WishlistProvider>
  );
}

export default App;
