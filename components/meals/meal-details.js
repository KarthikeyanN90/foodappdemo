import React from "react";
import classes from "./meal-details.module.css"
import Image from "next/image";

const ShowMealDetails = ({meal}) => {

  
  const mealDetail={...meal}[0];

  let {image,title,creator_email,instructions,summary,creator}=mealDetail;

  instructions = instructions.replace(/\n/g,'<br/>');



  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${creator_email}`}>{creator} </a>
          </p>
          <p className={classes.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default ShowMealDetails;
