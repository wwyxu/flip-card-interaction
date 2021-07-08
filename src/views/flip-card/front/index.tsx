import React from "react";
import Models from "src/models";

interface Front extends Models.Front {
    theme: string;
}

const FrontCard = ({ title, asset, theme }: Front) => {
  return (
        <>
        <div className="front-circle center mt-4">
        <img className="front-img-center center" alt={asset} src={asset} width="100" height="100"/>
        </div>
        <p className={`front-header mt-3 ${theme}`}>{title}</p>
        </>
  );
};

export default FrontCard;
