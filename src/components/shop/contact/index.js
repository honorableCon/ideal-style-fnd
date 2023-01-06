import LoginSignup from "../auth/LoginSignup";
import { Footer, Navber } from "../partials";
import React, { Fragment, useState } from "react";
import { signupReq } from "./fetchApi";

const ContactComponent = () => {
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    error: false,
    loading: false,
    success: false,
  });

  return (
    <Fragment>
      {popup && <SuccessPopup setPopup={setPopup} />}
      <div className="text-center text-2xl mt-64 font-semibold uppercase">
        Nous Contacter
      </div>
      <form className="space-y-4 m-64 mt-8 ">
        {data.success ? alert(data.success, "green") : ""}
        <div className="flex flex-col">
          <label htmlFor="name">
            Nom complet<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                name: e.target.value,
              })
            }
            value={data.name}
            type="text"
            id="name"
            className={`${
              data.error.name ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.name, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Adresse email<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`${
              data.error.email ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.email, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="reference">
            Référence Commande{" "}
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            value={data.reference}
            type="text"
            id="reference"
            className={`${
              data.error.name ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.name, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Message<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            className={`${
              data.error.email ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          >
            {data.email}
          </textarea>

          {!data.error ? "" : alert(data.error.email, "red")}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">
            Pièces jointes<span className="text-sm text-gray-600 ml-1"></span>
          </label>
          <input
            onChange={(e) =>
              setData({
                ...data,
                success: false,
                error: {},
                email: e.target.value,
              })
            }
            value={data.email}
            type="file"
            id="jointe"
            className={`${
              data.error.email ? "border-red-500" : ""
            } px-4 py-2 focus:outline-none border`}
          />
          {!data.error ? "" : alert(data.error.email, "red")}
        </div>
        <div
          onClick={(e) => setPopup(true)}
          style={{ background: "#303031" }}
          className="px-4 py-2 text-white text-center cursor-pointer font-medium uppercase"
        >
          Envoyer
        </div>
      </form>
    </Fragment>
  );
};

const Contact = (props) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <LoginSignup />
        <ContactComponent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;

export const SuccessPopup = ({ setPopup }) => {
  return (
    <div className="fixed top-1 left-1  p-64 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="w-64 bg-white rounded-lg mx-auto p-8">
        <div className="grid justify-center items-center h-full">
          <img className="h-16 mb-8 mx-auto" src={"/logo.png"} alt="logo" />
          <div className="text-center text-md font-semibold text-green-600">
            {/* message pour dire aux client nous allons repondre */}
            Votre message a été envoyé avec succès, nous vous répondrons dans
            les plus brefs délais.
          </div>
          <div
            onClick={(e) => setPopup(false)}
            className="text-center text-md font-semibold mt-8 p-2 text-white bg-black rounded-full cursor-pointer"
          >
            fermer
          </div>
        </div>
      </div>
    </div>
  );
};
