import React from "react";
import Models from "src/models";
import { concatDescription } from "src/utils/string";

interface Info extends Models.Back {
  type: string;
}

const InfoCard = ({asset, title, description, type}: Info) => {
  return (
    <div className={`container info-card ${type} rounded text-white my-3 p-4`}>
      <div className="row">
        <div className="col-md-2">
          <img className="center ml-3" src={asset} alt="intro" height="100" />
          </div>
        <div className="col-md-10">
          <h5 className="mb-2">{title}</h5>
          <p className="small-font">{concatDescription(description)}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
