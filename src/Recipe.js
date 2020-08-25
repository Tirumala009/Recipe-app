import React from "react";
import style from "./Recipe.module.css";

const key = Date.now();

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <p>Calories : {calories}</p>
      <ol key={key}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>

      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
