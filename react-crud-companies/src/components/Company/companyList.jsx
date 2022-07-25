import React, { useEffect, useState } from "react";
import * as companyServer from "./companyServer";

//Components :
import CompanyItem from "./companyItem";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  const listCompanies = async () => {
    try {
      const res = await companyServer.listCompanies();
      const data = await res.json();
      setCompanies(data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);
  console.log(companies);
  return (
    <div>
      <div className="row">
        {
          companies?
          companies.map((company) => (
            <CompanyItem key={company.id} company={company} listCompanies={listCompanies}/>
            ))
            :
            <p>No hay Compañias registradas</p>
          }
      </div>
    </div>
  );
};

export default CompanyList;
