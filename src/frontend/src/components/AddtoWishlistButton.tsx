import { Nav } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Product } from "./Product";
import axios from "axios";

interface AddtoWishlistButtonProps {
    item: Product;
  }

export function AddtoWishlistButton({ item }: AddtoWishlistButtonProps) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const wishlistURL = "http://localhost:8000/api/add_wishlist_item/"

  const AddToWishlist = async () => {
    try {
        
      } catch (error: any) {

      }
  }

  const handleButtonClick = () => {
    if (isLoggedIn) {
      // Handle the logic for adding to wishlist when logged in
      AddToWishlist();
    } else {
      // Navigate to the login page when not logged in
      navigate("/login");
    }
  };

  return (
    <Nav className="me-auto">
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleButtonClick}
      >
        {isLoggedIn ? (
          <span>Add to Wishlist                    </span>
        ) : (
          <span>Sign in to Wishlist                </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
        </svg>
      </button>
    </Nav>
  );
}
