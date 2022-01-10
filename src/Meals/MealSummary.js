import classes from './MealSummary.module.css';

const MealSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Meals</h2>
            <p>
                Choose your favorite dishes from our broad selection of 
                available meals and enjoy delicate lunch or dinner at home.
            </p>
            <p>
                All our meals are cppled woth high-quality ingredients, just in-time 
                and of course by experience chefs.
            </p>
        </section>

    );
}

export default MealSummary;