import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity, totalCost } from "../partials/Mixins";

import { cartListProduct } from "../partials/FetchApi";
import { getBrainTreeToken, getPaymentProcess } from "./FetchApi";
import { fetchData, fetchbrainTree, pay } from "./Action";

import DropIn from "braintree-web-drop-in-react";

const apiURL = process.env.REACT_APP_API_URL;

export const CheckoutComponent = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);

  const [state, setState] = useState({
    address: "",
    phone: "",
    error: false,
    success: false,
    clientToken: null,
    instance: {},
  });

  useEffect(() => {
    fetchData(cartListProduct, dispatch);
    fetchbrainTree(getBrainTreeToken, setState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        Veuillez patienter...
      </div>
    );
  }
  return (
    <Fragment>
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        <div className="text-2xl mx-2">Commande</div>
        {/* Product List */}
        <div className="flex flex-col md:flex md:space-x-2 md:flex-row">
          <div className="md:w-1/2">
            <CheckoutProducts products={data.cartProduct} />
          </div>
          <div className="w-full order-first md:order-last md:w-1/2">
            {state.clientToken !== null ? (
              <Fragment>
                <div
                  onBlur={(e) => setState({ ...state, error: false })}
                  className="p-4 md:p-8"
                >
                  {state.error ? (
                    <div className="bg-red-200 py-2 px-4 rounded">
                      {state.error}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col py-2">
                    <label htmlFor="address" className="pb-2">
                      Addresse de livraison
                    </label>
                    <input
                      value={state.address}
                      onChange={(e) =>
                        setState({
                          ...state,
                          address: e.target.value,
                          error: false,
                        })
                      }
                      type="text"
                      id="address"
                      className="border px-4 py-2"
                      placeholder="Address..."
                    />
                  </div>
                  <div className="flex flex-col py-2 mb-2">
                    <label htmlFor="phone" className="pb-2">
                      {"Numero de telephone"}
                    </label>
                    <input
                      value={state.phone}
                      onChange={(e) =>
                        setState({
                          ...state,
                          phone: e.target.value,
                          error: false,
                        })
                      }
                      type="number"
                      id="phone"
                      className="border px-4 py-2"
                      placeholder="+221"
                    />
                  </div>
                  <DropIn
                    options={{
                      authorization: state.clientToken,
                      // paypal: {
                      //   flow: "vault",
                      // },
                    }}
                    onInstance={(instance) => (state.instance = instance)}
                  />
                  {/* radiobutton */}
                  <fieldset className="flex flex-col py-2">
                    <label htmlFor="address" className="text-black pb-4">
                      Mode de paiement locale (784725303)
                    </label>
                    <div className="flex gap-8">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="address"
                          className="border px-4 py-2"
                          name="payment"
                        />
                        <label htmlFor="address" className="pb-2">
                          <img
                            className="h-12 rounded-md"
                            src="https://www.sanwi-informatique.com/img/cms/orange-money.png"
                          />
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="address"
                          className="border px-4 py-2"
                          name="payment"
                        />
                        <label htmlFor="address" className="pb-2">
                          <img
                            className="h-12 rounded-md"
                            src="https://s.rfi.fr/media/display/ed44f02a-c239-11ec-b0fc-005056bf8594/w:720/p:16x9/wave-senegal-mobile-money.png"
                          />
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="address"
                          className="border px-4 py-2"
                          name="payment"
                        />
                        <label htmlFor="address" className="pb-2">
                          <img
                            className="h-12 rounded-md"
                            src="https://paydunya.com/refont/images/icon_pydu/partners/free.png"
                          />
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="address"
                          className="border px-4 py-2"
                          name="payment"
                        />
                        <label htmlFor="address" className="pb-2">
                          Paiement à la livraison
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div
                    onClick={(e) =>
                      pay(
                        data,
                        dispatch,
                        state,
                        setState,
                        getPaymentProcess,
                        totalCost,
                        history
                      )
                    }
                    className="w-full px-4 py-3 my-2 text-center text-white font-semibold cursor-pointer"
                    style={{ background: "#000" }}
                  >
                    Commander
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="flex items-center justify-center py-12">
                <svg
                  className="w-12 h-12 animate-spin text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const CheckoutProducts = ({ products }) => {
  const history = useHistory();

  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products !== null && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between"
              >
                <div className="md:flex md:items-center md:space-x-4">
                  <img
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                    src={`${apiURL}/uploads/products/${product.pImages[0]}`}
                    alt="wishListproduct"
                  />
                  <div className="text-lg md:ml-6 truncate">
                    {product.pName}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    Prix : {product.pPrice} FCFA{" "}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    Quantité : {quantity(product._id)}
                  </div>
                  <div className="font-semibold text-gray-600 text-sm">
                    Total : {subTotal(product._id, product.pPrice)} FCFA
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Pas de produit</div>
        )}
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;
