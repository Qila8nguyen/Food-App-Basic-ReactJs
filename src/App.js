// import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import { useState} from 'react';
import Meals from './Meals/Meals';
import Cart from './Cart/Cart';
import CartProvider from './store_context/CartProvider';

function App() {
  const [cartShown, setShowCart] = useState (false);

  const toShowCart = () => {
    setShowCart(true);
  };

  const toHideCart = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose = {toHideCart} />}
      <Header onShowCart = {toShowCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
