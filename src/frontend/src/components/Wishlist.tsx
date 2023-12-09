import { Offcanvas, Stack } from "react-bootstrap";
import { useWishlist } from "../context/WishlistContext";
import { ItemCard } from "./ItemCard";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

type WishlistProps = {
    isOpen: boolean
}

export function Wishlist({ isOpen }: WishlistProps) {
    const wishlistURL = "http://localhost:8000/api/get_wishlist/"
    const [items, setItems] = useState<Product[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedToken = sessionStorage.getItem('token');
                const response = await axios.get(wishlistURL, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `token ${storedToken}`
                    },
                });
                setItems(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
                setItems([]); // Set an empty array or handle the error state accordingly
            }
        };

        // Fetch data only when the Wishlist is open
        if (isOpen) {
            fetchData();
        }
    }, [isOpen]);
    // Helper function to prepend base URL for images
    const modifyImageURL = (product: Product): Product => {
        // Assuming 'image' is the property containing the image path
        return {
            ...product,
            img: `http://localhost:8000${product.img}`
        };
    };
    const {closeList} = useWishlist()
    return (
        <Offcanvas show={isOpen} onHide={closeList} placement = "end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className="m-3">
                        <h3 >Wishlist</h3>
                        <hr className="my-1" />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Stack gap={3}>
                    {items.map((wishlistItem: any) => (
                        <ItemCard
                            key={wishlistItem.id}
                            item={modifyImageURL(wishlistItem.product)}
                        />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
