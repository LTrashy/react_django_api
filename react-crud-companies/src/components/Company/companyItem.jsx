import React from "react";

const CompanyItem = ({ company }) => {
  //   console.log(props);
  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">{company.name}</h3>
        <p className="card-text">
          Founded: <strong>{company.foundation}</strong>
        </p>
        <a href={company.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Go to website
        </a>
      </div>
    </div>
  );
};

export default CompanyItem;
