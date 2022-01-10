import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../store_context/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext (CartContext);
    const [btnIsHighlight, highlightBtn] = useState (false);
    const {items} = cartCtx;

    const btnClasses = `${classes.button} ${btnIsHighlight? classes.bump : ''}` ;   
    const numberOfItems = items.reduce ((prevAmount, item ) => {
        return prevAmount + item.amount;
    },0);

    useEffect (() => {
        if (items.length === 0) {
            return;
        }
        highlightBtn(true);
        setTimeout(()=> {
            highlightBtn(false);
        },300)
    }, [items]);

    return (
        <button className={btnClasses} onClick = {props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}> {numberOfItems}  </span>
        </button>
    );
}

export default HeaderCartButton;