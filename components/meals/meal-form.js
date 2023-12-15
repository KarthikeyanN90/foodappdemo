'use client'

import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  return <button disabled={pending} type="submit" > {pending ? "submiting...." : "Share Meal"} </button>;
};

export default MealsFormSubmit;
