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

  return (
    <div className="row">
      {companies.map((company) => (
        <CompanyItem key={company.id} company={company}/>
      ))}
    </div>
  );
};

export default CompanyList;
