import React, { Suspense } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import { getMealDetails } from "@/lib/dbhelper";
import ShowMealDetails from "@/components/meals/meal-details";

const MealDetails = async (mealslug) => {
  const meal = await getMealDetails(mealslug);
  return meal;
};

const MealDetailsPage = async ({ params }) => {
  const meal = await getMealDetails(params.mealslug);
  if (!meal) {
    notFound();
  }

  return (
    <>
      <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
        <ShowMealDetails meal={meal} />
      </Suspense>
    </>
  );
};

export default MealDetailsPage;
