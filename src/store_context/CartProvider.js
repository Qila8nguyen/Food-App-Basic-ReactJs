import React, { useReducer } from "react";
// import ReactDOM from "react-dom";
import CartContext from "./cart-context";

const initialState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state,action) => {
    if (action.act === "ADD") {
        const updateTotalAmount = state.totalAmount + action.item.price*action.item.amount;
        const existingItemIndex = state.items.findIndex (item => item.id === action.item.id);
        const existingCartItem = state.items[existingItemIndex];

        let updateItems;
        if (existingCartItem) {
            const updateItem = {...existingCartItem,
            amount: existingCartItem.amount + action.item.amount};
            updateItems = [...state.items];
            updateItems[existingItemIndex] = updateItem;
        } else {
            updateItems = state.items.concat(action.item);
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }

    if (action.act === "REMOVE") {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingItemIndex];
        const updateTotalAmount = state.totalAmount - existingCartItem.price;

        let updateItems;

        if (existingCartItem.amount === 1) {
            updateItems = state.items.filter (item => item.id !== action.id) ;
        } else {
            const updateItem = {...existingCartItem, amount: existingCartItem.amount-1};
            updateItems = [...state.items];
            updateItems[existingItemIndex] = updateItem;
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }
    return initialState;
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer (cartReducer, initialState);
    const addItemToCart = (item) => {
        dispatchCartAction({act: "ADD", item: item});
    }

    const removeItemFromCart = (id) => {
        dispatchCartAction({act: "REMOVE", id: id});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }
    return (
    <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;