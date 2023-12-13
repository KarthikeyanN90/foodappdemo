import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("select * from meals").all();
}

export function getMeal(slug)
{
   return db.prepare("select * from meals where slug= ?").get(slug)
}
