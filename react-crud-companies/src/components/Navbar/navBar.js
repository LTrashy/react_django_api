import {Link} from "react-router-dom";

const navBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React App - CRUD Company
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/companyForm">
                Add Company
              </Link>
            </li>
          </ul>
          <a href="https://github.com/LTrashy/react_django_api" className="d-flex btn btn-outline-success">Github</a>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
