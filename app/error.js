"use client";
import React from "react";

const ErrorPage = ({error}) => {
  return (
    <main className="error">
      <h1>error occoured</h1>
      <p>Faild to fetch the meal data. Please try again later</p>
    </main>
  );
};

export default ErrorPage;
