import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as CompanyServer from "./companyServer";

const CompanyForm = () => {
  const history = useNavigate();
  const params = useParams();

  const initialState = { id: 0, name: "", foundation: 1950, website: "" };
  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(company);
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();

        if (data.message === "Success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(params.id, company);
      }
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCompany = async (companyId) => {
    try {
      const res = await CompanyServer.getCompany(companyId);
      const data = await res.json();
      const { name, foundation, website } = data.company;
      setCompany({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="name"
            autoComplete="off"
            type="text"
            className="form-control"
            placeholder="name"
            value={company.name}
            onChange={handleInputChange}
          />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="foundation"
            placeholder="foundation"
            value={company.foundation}
            onChange={handleInputChange}
          />
          <label>Foundation</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="website"
            placeholder="website"
            value={company.website}
            onChange={handleInputChange}
          />
          <label>Website</label>
        </div>
        <div className="d-grid gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Update
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-success">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
