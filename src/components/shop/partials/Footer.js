import React, { Fragment } from "react";
import { logout } from "./Action";

const Footer = (props) => {
  return (
    <Fragment>
      <footer>
        <div class="bg-black dark:bg-gray-900">
          <div class="grid grid-cols-2 gap-6 px-6 py-8 md:flex md:justify-around">
            {/* informations */}
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
                Informations
              </h2>
              <ul class="text-white dark:text-gray-400">
                <li class="mb-4">
                  <a href="/whoami" class=" hover:underline">
                    Qui sommes-nous ?
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/contact-us" class="hover:underline">
                    Contactez-nous
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/cgv" class="hover:underline">
                    Conditions générales de vente
                  </a>
                </li>
              </ul>
            </div>
            {/* mon compte */}
            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
                Mon compte
              </h2>
              <ul class="text-white dark:text-gray-400">
                <li class="mb-4">
                  <a href="/user/orders" class="hover:underline">
                    Mes Commandes
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/contact-us" class="hover:underline">
                    Annulation et retour
                  </a>
                </li>
                <li class="mb-4">
                  <a href="/user/profile" class="hover:underline">
                    Mes Informations
                  </a>
                </li>

                <li onClick={(e) => logout()} class="mb-4">
                  <div class="hover:underline">Deconnexion</div>
                </li>
              </ul>
            </div>

            <div className="col-span-2 ">
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
                Nous Contacter
              </h2>

              <ul class="grid gap-2 text-white dark:text-gray-400">
                <li class="flex mb-4">
                  <svg
                    width="24px"
                    height="64px"
                    viewBox="-3 0 24 24"
                    id="meteor-icon-kit__regular-map-marker"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.7685 23.0866C9.7296 23.1333 9.6866 23.1763 9.6399 23.2152C9.2154 23.5686 8.5849 23.511 8.2315 23.0866C2.74384 16.4959 0 11.6798 0 8.63811C0 3.86741 4.2293 0 9 0C13.7707 0 18 3.86741 18 8.63811C18 11.6798 15.2562 16.4959 9.7685 23.0866zM16 8.63811C16 5.06318 12.7595 2 9 2C5.24047 2 2 5.06318 2 8.63811C2 10.9292 4.31851 15.1147 9 20.873C13.6815 15.1147 16 10.9292 16 8.63811zM9 11C7.8954 11 7 10.1046 7 9C7 7.89543 7.8954 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11z"
                        fill="#fff"
                      ></path>
                    </g>
                  </svg>
                  <div className="ml-4">
                    Point E, rue Kolda, villa n° 15A, <br />
                    Même alignement que la police <br />
                    Dakar, Sénégal
                  </div>
                </li>
                <li class="flex gap-4 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                    </g>
                  </svg>
                  <svg
                    fill="#fff"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>WhatsApp icon</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                    </g>
                  </svg>
                  <div className="ml-4" class="hover:underline">
                    +221 78 472 53 03
                  </div>
                </li>
                <li class="flex items-center mb-4">
                  <svg
                    fill="#fff"
                    height="24px"
                    width="24px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    enable-background="new 0 0 512 512"
                    stroke="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256c141.4,0,256-114.6,256-256S397.4,0,256,0z M256,469.3 c-117.8,0-213.3-95.5-213.3-213.3c0-117.8,95.5-213.3,213.3-213.3c117.8,0,213.3,95.5,213.3,213.3 C469.3,373.8,373.8,469.3,256,469.3z M234.7,213.3L181.3,160l-32,32l128,128V85.3h-42.7V213.3z"></path>{" "}
                    </g>
                  </svg>
                  <div class="ml-4 hover:underline">
                    Du Lundi à Vendredi: 09h-17h 30 <br />
                    Samedi: 11h-17h 30
                  </div>
                </li>
                <li class="flex mb-4">
                  <svg
                    fill="#fff"
                    height="24px"
                    width="24px"
                    version="1.1"
                    id="Filled_Icons"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    enable-background="new 0 0 24 24"
                    stroke="#fff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g id="mail-filled">
                        {" "}
                        <path d="M24,5.7V21H0V5.7l12,10L24,5.7z M12,13l12-9.9V3H0v0.1L12,13z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <div class="ml-4 hover:underline lowercase">
                    IdealStyleSenegal@gmail.com
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
                Nous Suivre
              </h2>
              <ul class="text-white dark:text-gray-400">
                <li class="flex items-center mb-4">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint0_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint1_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint2_radial_87_7153)"
                      ></rect>{" "}
                      <path
                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <radialGradient
                          id="paint0_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                        >
                          {" "}
                          <stop stop-color="#B13589"></stop>{" "}
                          <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                          <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint1_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                        >
                          {" "}
                          <stop stop-color="#E0E8B7"></stop>{" "}
                          <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                          <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#E2425C"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint2_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                        >
                          {" "}
                          <stop
                            offset="0.156701"
                            stop-color="#406ADC"
                          ></stop>{" "}
                          <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#6A45BE"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                  <a
                    href="https://www.instagram.com/idealstyledakar/?hl=fr"
                    class="ml-2 hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li class="flex items-center mb-4">
                  <img
                    class="w-6 h-6"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                    alt="facebook"
                  />
                  <a
                    href="https://www.facebook.com/IdealStyleDakar/"
                    class="ml-4 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li class="flex items-center mb-4">
                  <img
                    class="w-6 h-6"
                    src="https://www.edigitalagency.com.au/wp-content/uploads/TikTok-logo-on-smooth-edges-black-square.png"
                    alt="tiktok"
                  />
                  <a
                    href="www.tiktok.com/@idealstylesenegal"
                    class="ml-4 hover:underline"
                  >
                    Tik-Tok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
