import React from "react";
import Models from "src/models";

interface Front extends Models.Front {
    theme: string;
}

const FrontCard = ({ title, asset, theme }: Front) => {
  return (
        <>
        <img className="img-front center" style={{ marginTop: "30px" }} alt={asset} src={asset} width="150" height="150"/>
        <p className={`front-header mt-3 ${theme}`}>{title}</p>
        </>
  );
};

export default FrontCard;
