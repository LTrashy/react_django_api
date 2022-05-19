const API_URL = "http://localhost:8000/api/companies/";

export const listCompanies= async ()=>{
    return await fetch(API_URL);
};
export const getCompany= async (companyId)=>{
    return await fetch(`${API_URL}${companyId}`);
};

export const registerCompany= async (newCompany)=>{
    return await fetch(API_URL,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "name":String(newCompany.name).trim(),
            "direccion":String(newCompany.direccion).trim(),
            "nit":parseInt(newCompany.nit),
            "telefono":parseInt(newCompany.telefono),
        }),
    });
};

export const updateCompany= async (companyId, updatedCompany)=>{
    return await fetch(`${API_URL}${companyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: String(updatedCompany.name).trim(),
        direccion: String(updatedCompany.direccion).trim(),
        nit: parseInt(updatedCompany.nit),
        telefono: parseInt(updatedCompany.telefono),
      }),
    });
};

export const DeleteCompany= async (companyId)=>{
    return await fetch(`${API_URL}${companyId}`,{
        method:"DELETE",
        });
};