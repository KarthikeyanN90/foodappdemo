import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

const MealsGrid = ({ meals }) => {
  return (
    <ul key={meals.id} className={classes.meals}>
      {meals.map((meal) => (
        <MealItem {...meal} />
      ))}
    </ul>
  );
};

export default MealsGrid;
