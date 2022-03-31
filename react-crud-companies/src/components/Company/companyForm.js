const companyForm = () =>{
    return (
      <div className="col-md-3 mx-auto">
        <h2 className="mb-3 text-center">Company</h2>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name"
            />
            <label for="floatingInput">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </form>
      </div>
    );
};

export default companyForm;