import React, { Fragment, useState, useContext } from "react";
import { loginReq } from "./fetchApi";
import { LayoutContext } from "../index";

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { data: layoutData, dispatch: layoutDispatch } =
    useContext(LayoutContext);

  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: true,
  });

  const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

  const formSubmit = async () => {
    setData({ ...data, loading: true });
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <div className="text-center text-2xl mb-6 grid grid-cols-2 items-center">
        <img src="/logo.png" alt="logo" className="w-32" />
        <div className="text-2xl text-left font-bold">Connexion</div>
      </div>
      {layoutData.loginSignupError ? (
        <div className="bg-red-200 py-2 px-4 rounded">
          You need to login for checkout. Haven't accont? Create new one.
        </div>
      ) : (
        ""
      )}
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">
            Nom d'utilisateur ou email
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.email}
            type="text"
            id="name"
            className={`${
              !data.error ? "" : "border-red-500"
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="flex justify-between">
            <div>
              Mot de passe <span className="text-sm text-gray-600 ml-1">*</span>
            </div>
            <div>
              <svg
                onClick={() => setShowPassword(!showPassword)}
                width="16px"
                height="16px"
                viewBox="0 -3 16 16"
                id="meteor-icon-kit__regular-eye-s"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 10C5.24097 10 2.7266 8.5377 0.45689 5.6131C0.17689 5.2523 0.17689 4.7476 0.45689 4.3868C2.72662 1.46229 5.24098 0 8 0C10.759 0 13.2734 1.4623 15.5431 4.3869C15.8231 4.7477 15.8231 5.2524 15.5431 5.6132C13.2734 8.5377 10.759 10 8 10zM8 2C6.099 2 4.29616 2.95259 2.53699 5C4.29611 7.0474 6.099 8 8 8C9.901 8 11.7038 7.0474 13.463 5C11.7039 2.95262 9.901 2 8 2zM8 6.5C7.1716 6.5 6.5 5.8284 6.5 5C6.5 4.1716 7.1716 3.5 8 3.5C8.8284 3.5 9.5 4.1716 9.5 5C9.5 5.8284 8.8284 6.5 8 6.5z"
                    fill="#000"
                  ></path>
                </g>
              </svg>
            </div>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.password}
            type={showPassword ? "text" : "password"}
            id="password"
            className={`${
              !data.error ? "" : "border-red-500"
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error)}
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="px-4 py-2 focus:outline-none border mr-1"
            />
            <label htmlFor="rememberMe">
              Se rappeler de moi{" "}
              <span className="text-sm text-gray-600">*</span>
            </label>
          </div>
          <a className="block text-gray-600" href="/">
            Mot de passe oublié?
          </a>
        </div>
        <div
          onClick={(e) => formSubmit()}
          style={{ background: "#303031" }}
          className="font-medium px-4 py-2 text-white text-center cursor-pointer"
        >
          Se connecter
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
