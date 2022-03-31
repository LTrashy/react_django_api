import React, { useEffect, useState } from "react";
import * as companyServer from "./companyServer";

const CompanyList = () => {
  
  const[companies,setCompanies]=useState([]);

  const listCompanies= async ()=>{
    try {
      const res = await companyServer.listCompanies();
      const data = await res.json();
      setCompanies(data.companies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    listCompanies();
  },[]);

  return (
    <div>
      {
        companies.map((company)=>(
          <h2>{company.name}</h2>
        ))
      }
    </div>
  );
};

export default CompanyList;