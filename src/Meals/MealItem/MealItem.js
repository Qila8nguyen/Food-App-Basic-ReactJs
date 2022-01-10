// import Card from '../../UI/Card';
import { useContext } from 'react';
import CartContext from '../../store_context/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const addItemToCart = amount => {
        cartCtx.addItem ({
            name: props.name,
            id: props.id,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id = {classes.id}  onAddToCart = {addItemToCart}/>
            </div>
        </li>
    );
}

export default MealItem;