import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../API/Api.js";
import { useHistory } from "react-router";


const Login = () => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();

  const onSubmit = async (creds) => {
    console.log(creds);
    const res = await login(creds);
    if (res.token) {
      localStorage.setItem("auth.token", JSON.stringify(res.token));
      history.replace("/homepage");
      
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      <input {...register("password")} />
      <input type="submit" />
    </form>
  );
};

export default Login;