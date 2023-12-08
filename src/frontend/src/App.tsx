//External
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
//Pages
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { ProductPage } from "./pages/ProductPage";
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';

//Components
import { Navbar } from "./components/Navbar";
import { WishlistProvider } from "./context/WishlistContext";
import AdminAddItem from "./pages/AdminAddItem.tsx";
import { AdminNav } from "./components/AdminNav.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
      
        <Navbar />
        <AdminNav />
        <Container className="mb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search-results" element={<SearchResults  />} />
            <Route path="/add" element={<AdminAddItem />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
        
          </Routes>
        </Container>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;
