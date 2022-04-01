import React from "react";

import * as CompanyServer from "./companyServer";
import { useNavigate } from "react-router-dom";

const CompanyItem = ({ company, listCompanies }) => {
  //   console.log(props);
  const navigate=useNavigate();
  const handleDelete = async (companyId) => {
    await CompanyServer.DeleteCompany(companyId);
    listCompanies();
  };
  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          {company.name}
          <button
            onClick={() => navigate(`/updateCompany/${company.id}`)}
            className="btn btn-secondary btn-sm mx-2"
          >
            Update
          </button>
        </h3>
        <p className="card-text">
          Founded: <strong>{company.foundation}</strong>
        </p>
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Go to website
        </a>
        <button
          className="btn btn-danger my-2"
          onClick={() => company.id && handleDelete(company.id)}
        >
          Delete Company
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
