import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllCategory } from "../../admin/categories/FetchApi";
import "./style.css";
const apiURL = process.env.REACT_APP_API_URL;

const Hero = (props) => {
  const history = useHistory();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let responseData = await getAllCategory();
      if (responseData && responseData.Categories) {
        let categories = [
          {
            cName: "TOUTEs NOS nouveautés",
            _id: "all",
            cImage: "customize/1672946189145_new.jpeg",
          },
        ];
        responseData.Categories.filter((item) => {
          if (item.cName == "Nos Coups De Coeur") {
            item.cImage = `categories/${item.cImage}`;
            categories.push(item);
          }
        });
        setCategories(categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`mt-24 md:my-4`}>
      <div className="md:py-8 px-4 md:px-20 grid md:grid-cols-2 md:gap-6">
        {categories && categories.length > 0 ? (
          categories.map((item, index) => {
            return (
              <Fragment key={index}>
                <div className="h-fit col-span-1 m-2 flex flex-col bg-black overflow-hidden items-center justify-center space-y-2  md:mt-32 relative">
                  <img
                    className="h-full object-cover object-top opacity-75 hover:opacity-75 scale-im  transition duration-500 ease-in-out"
                    src={`${apiURL}/uploads/${item.cImage}`}
                    alt="pic"
                  />
                  <div className="font-medium absolute top-0 left-0 ml-8 pt-8 md:ml-10 md:pt-16">
                    <div className="text-3xl md:text-4xl w-48 md:w-64 text-white font-semibold uppercase">
                      {index === 0
                        ? "TOUTEs NOS nouveautés "
                        : "nos coups de coeur !!"}
                    </div>
                    <div className="flex justify-start items-center mt-8">
                      <button
                        onClick={(e) =>
                          history.push(`/products/category/${item._id}`)
                        }
                        className="bg-white text-black p-2 px-4 md:px-6 md:py-4 rounded-full font-bold shadow-md uppercase"
                      >
                        Découvrir
                      </button>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })
        ) : (
          <div className="text-xl text-center my-4">No Category</div>
        )}
      </div>
    </div>
  );
};

export default Hero;
