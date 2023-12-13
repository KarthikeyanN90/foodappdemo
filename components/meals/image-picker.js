"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ lable, name }) => {
  const ImageInputRef = useRef();

  const [pickerImage, setPickerImage] = useState();

  const handleImageClick = () => {
    ImageInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file){
      setPickerImage(null);
      return;
    }

    const filereader = new FileReader();

    filereader.onload = () => {
      setPickerImage(filereader.result);
    };

    filereader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}></label>
      <div className={classes.controls}>

        <div className={classes.preview}>

          {!pickerImage && <p>No Image Preview</p>}
          {pickerImage && <Image src={pickerImage} alt=" The Image was selected by user" fill />}

        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={ImageInputRef}
          onChange={handleImageChange}
          required
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
