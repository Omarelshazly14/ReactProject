import React from "react";
import { useFormik } from "formik";

export default function Form() {
  const validate = (values) => {
    const errors = {};

    if (!values.Name) {
      errors.Name = "Required";
    } else if (values.Name.length > 15) {
      errors.Name = "Name <= 15 letters";
    } else if (values.Name.length < 3) {
      errors.Name = "Name > 3 letters";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 20) {
      errors.password = "Password Length <= 20";
    } else if (values.password.length < 5) {
      errors.password = "Password Length > 5";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h2 className="w-50 m-auto mt-5 ">Sign Up</h2>
      <form onSubmit={formik.handleSubmit} className="w-50 m-auto mb-5 row">
        <div className="row my-2">
          <label htmlFor="Name" className="col-form-label">
            Name
          </label>
          <input
            className="form-control"
            id="Name"
            name="Name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <div className="col text-danger">{formik.errors.Name}</div>
          ) : null}
        </div>
        <div className="row my-2">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="col text-danger">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="row my-2">
          <label htmlFor="email" className="col-form-label">
            Email Address
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="col text-danger">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
