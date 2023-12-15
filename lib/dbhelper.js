import { MongoClient } from "mongodb";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(process.env.DB_URI);
    await mongoClient.connect();
    return mongoClient;
  } catch (error) {
    process.exit();
  }
}

export async function getMealList() {
  const uri = process.env.DB_URI;
  let mongoClient = await connectToCluster(uri);
  const db = mongoClient.db("foodapp");
  const collection = db.collection("MealList");
  const result = await collection.find({}).toArray();

  return result;
}

export async function getMealDetails(slug) {
  let mongoClient = "";
  try {
    const uri = process.env.DB_URI;
    let mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("foodapp");
    const collection = db.collection("MealList");
    const result = await collection.find({ slug }).toArray();

    mongoClient.close();
    return result;
  } catch (error) {
    mongoClient.close();
  }
}

export async function saveMeal(meal) {
  let mongoClient = "";
  try {

    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const filename = `${meal.slug}.${extension}`;

    const stream= fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage=await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage),(error)=>{

      if(error)
      throw new Error('Image Processing failed')

    });

    meal.image=`/images/${filename}`

    const uri = process.env.DB_URI;
    let mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("foodapp");
    const collection = db.collection("MealList");
    const result = await collection.insertOne(meal);

    mongoClient.close();
    return result;

  } catch (error) 
  {
    
    console.log(error)
  }
}
