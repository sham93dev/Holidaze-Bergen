import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import LoginError from "../common/LoginError";
import { LOGIN_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";

const schema = yup.object().shape({
  identifier: yup.string().required("Enter your username"),
  password: yup.string().required("Enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(LOGIN_URL, data);
      console.log("response", response.data);
      setAuth(response.data);
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="login-wrapper">
      <form id="loginNow" onSubmit={handleSubmit(onSubmit)}>
        {loginError && <LoginError>{loginError}</LoginError>}
        <fieldset disabled={submitting}>
          <div className="input-field1">
            <input name="username" placeholder="Username" {...register("identifier")} />
            {errors.username && <LoginError>{errors.username.message}</LoginError>}
          </div>
          <div className="input-field2">
            <input id="passwordField" name="password" placeholder="Password" {...register("password")} type="password" />
            {errors.password && <LoginError>{errors.password.message}</LoginError>}
          </div>
          <button className="login-button">{submitting ? "Logging in" : "Log in"}</button>
        </fieldset>
      </form>
    </div>
  );
}
