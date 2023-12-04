import { Offcanvas, Stack } from "react-bootstrap";
import storeItems from "../data/wishlist.json"
import { useWishlist } from "../context/WishlistContext";
import { ItemCard } from "./ItemCard";
import { Product } from "./Product";
type WishlistProps = {
    isOpen: boolean
}
export function Wishlist({ isOpen }: WishlistProps) {
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
                    {storeItems.map((product: Product) => (
                        <ItemCard item={product} />
                    ))}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
