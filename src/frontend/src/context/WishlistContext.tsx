import { createContext, ReactNode, useContext, useState } from "react"
import { Wishlist } from "../components/Wishlist"

export function useWishlist() {
    return useContext(WishlistContext);
}

type WishlistProviderProps = {
    children: ReactNode
}

type WishlistContext = {
    openList: () => void
    closeList: () => void
}
const WishlistContext = createContext({} as WishlistContext)

export function WishlistProvider( { children }: WishlistProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const openList = () => setIsOpen(true)
    const closeList = () => setIsOpen(false)

    return (
        <WishlistContext.Provider value={{
            openList,
            closeList,
        }}>
            {children}
            <Wishlist isOpen={isOpen} />
        </WishlistContext.Provider>
    )
}