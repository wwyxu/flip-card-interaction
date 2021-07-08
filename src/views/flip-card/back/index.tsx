import React from "react";
import Models from "src/models";
import { concatDescription } from "src/utils/string";

const BackCard = ({ title, description, asset }: Models.Back) => {
    return (
        <>
            <h4 className="text-center text-white mt-4" >{title}</h4>
            <hr className="my-2 center"/>
            <p className="text-center text-white px-5" >{concatDescription(description)}</p>
            <div className="back-dot center mt-3">
            <img className="back-img-center" src={asset} alt={asset}  width="70" height="70" />
            </div>
        </>
    );
};

export default BackCard;
