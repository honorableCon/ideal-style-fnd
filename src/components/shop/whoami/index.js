import React, { Fragment } from "react";
import LoginSignup from "../auth/LoginSignup";
import Layout from "../layout";
import { Footer, Navber } from "../partials";

const WhoAmiComponent = () => {
  return (
    <Fragment>
      <h1 className="text-black text-3xl md:text-4xl font-bold mt-32 mx-8 mb-8 md:mt-64 md:mb-16 md:mx-64">
        Qui sommes-nous ?
      </h1>
      <p className="text-black mx-8 md:mx-64 text-justify leading-7 mb-16">
        Créé en 2015, Ideal Style est une boutique de vêtements prêts à porter
        basée au Sénégal pour les femmes musulmanes modernes et toute femme
        désirant s’habiller de manière moderne tout en restant pudique. <br />
        Tuniques, chemisiers, gilets, robes, abayas, pantalons, foulards, jupes,
        vestes, combinaisons, ensembles, hijabs et accessoires etc…, Ideal Style
        propose à une clientèle féminine, en quête d’originalité, des pièces
        uniques qui leur parlent et leur ressemblent, alliant mode et pudeur,
        confectionnés avec des matières de qualité et qui procurent aux femmes
        confort et légèreté. <br />
        L'équipe Ideal Style déploie beaucoup d’énergie à sélectionner des
        articles de bonne qualité à des prix abordables, et composer des
        ensembles pour tous les goûts. <br />
        Retours gratuits : Une erreur de taille, un mauvais choix..? ce n'est
        pas un problème, Ideal Style prend en charge les frais de retour et vous
        rembourse sous 24 heures.
      </p>
    </Fragment>
  );
};

const WhoAmi = (props) => {
  return (
    <Fragment>
      <div className="flex-grow">
        <Navber />
        <LoginSignup />
        <WhoAmiComponent />
      </div>
      <Footer />
    </Fragment>
  );
};

export default WhoAmi;
