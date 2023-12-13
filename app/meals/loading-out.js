import React from "react";
import classes from "./loading.module.css";

const MealLoadingPage = () => {
  return <p className={classes.loading}>Fetching Meals...</p>;
};

export default MealLoadingPage;
