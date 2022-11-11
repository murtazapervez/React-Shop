import { createContext, useState } from "react";
import { getProduct } from "./data";


export const CartContext = createContext({
    item: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
})


export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        return (quantity > 0) ? quantity : 0
    }


    function addOneToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    quantity: 1
                }
            ])

        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                )
            )
        }

    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        (quantity == 1) ? deleteFromCart(id)
            : setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                )
            )
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => { return currentProduct.id != id })
        )
    }

    function getTotalCost() {

        let totalCost = 0;

        cartProducts.map((cartItem) => {
            const product = getProduct(cartItem.id)
            totalCost += (product.price * cartItem.quantity)
        })

        return totalCost;
    }

    const contextValue = {
        item: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }

    return (
        <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
    )
}

export default CartProvider;