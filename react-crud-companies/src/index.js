import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Routes, Route} from "react-router-dom"

//components
import NavBar from "./components/Navbar/navBar";
import CompanyList from "./components/Company/companyList";
import CompanyForm from "./components/Company/companyForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <div className="container my-4">
      <Routes>
        <Route exact path="/" element={<CompanyList />} />
        <Route path="/companyForm" element={<CompanyForm />} />
        <Route path="/updateCompany/:id" element={<CompanyForm />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
