import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";


const Meal = async () =>{
  const meals = await  getAllMeals();

  return  <MealsGrid meals={meals} />
}

const MealsPage = async() => {


 

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p> Choose you favorite and cook it your self. It is easy and fun! </p>
        <p className={classes.cta}>
          <Link href="/meals/share"> share you favorite recipe </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>} >  
        <Meal />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
