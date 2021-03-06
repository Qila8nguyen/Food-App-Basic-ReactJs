import { useContext } from 'react';
import CartContext from '../store_context/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    // const cartItemList = [{
    //     id: '1',
    //     name: 'Sushi',
    //     amount: '3',
    //     price: '12.99'
    // }];

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartAddItemHandler = (item) => {
        cartCtx.addItem(item);
    };

    const cartRemoveItemHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {
                cartCtx.items.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price = {item.price}
                        onAdd={cartAddItemHandler.bind(null,item)}
                        onRemove={cartRemoveItemHandler.bind(null,item.id)} />
                ))
            }
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && < button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;