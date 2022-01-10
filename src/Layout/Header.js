import { Fragment } from "react";

import mealsImage from '../assets/meals.jpg'
// import CartIcon from "../Cart/CartIcon";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className = {classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick = {props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A very delicious meal from MealsReact store' />
            </div>
        </Fragment>
    );
}

export default Header;