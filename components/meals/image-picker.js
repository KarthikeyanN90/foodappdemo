"use client";
import React, { useRef } from "react";
import classes from "./image-picker.module.css";

const ImagePicker = ({ lable, name }) => {
  const ImageInputRef = useRef();

  const handleImageClick = () => {
    ImageInputRef.current.click();
  };

  const handleImageChange=()=>{

  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}></label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          onClick={handleImageClick}
          type="button"
        >
          Pic an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
