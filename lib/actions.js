"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./dbhelper";
import { revalidatePath } from "next/cache";

const isInValidInput = (text) => {
  return !text || text.trim() !== "";
};

export const shareMeal = async (prevState, formdata) => {
  const Meal = {
    title: formdata.get("title"),
    summary: formdata.get("summary"),
    instructions: formdata.get("instructions"),
    image: formdata.get("image"),
    creator: formdata.get("name"),
    creator_email: formdata.get("email"),
  };

  if (
    isInValidInput(Meal.title) ||
    isInValidInput(Meal.summary) ||
    isInValidInput(Meal.instructions) ||
    isInValidInput(Meal.creator) ||
    !Meal.creator_email.includes("@") ||
    !Meal.image ||
    Meal.image.size === 0
  ) {
    return { message: "Invalid Input" };
  }

  const result = await saveMeal(Meal);
  revalidatePath("/meals");
  redirect("/meals");
};
