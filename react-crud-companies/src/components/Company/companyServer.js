const API_URL = "http://localhost:8000/api/companies/";

export const listCompanies= async ()=>{
    return await fetch(API_URL);
};