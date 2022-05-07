import React from "react";
import { useFormik } from "formik";

export default function AddPost() {
  const validate = (values) => {
    const errors = {};

    if (!values.postTitle) {
      errors.postTitle = "Required";
    } else if (values.postTitle.length > 25) {
      errors.postTitle = "Post Title <= 25 letters";
    } else if (values.postTitle.length < 3) {
      errors.postTitle = "Post Title > 3 letters";
    }

    if (!values.postBody) {
      errors.postBody = "Required";
    } else if (values.postBody.length > 250) {
      errors.postBody = "Post Body <= 250 letters";
    } else if (values.postBody.length < 3) {
      errors.postBody = "Post Body > 3 letters";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      postTitle: "",
      postBody: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="m-auto w-75">
      <div className="row my-2">
        <label htmlFor="postTitle" className="col-form-label">
          Post Title
        </label>
        <input
          className="form-control"
          id="postTitle"
          name="postTitle"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postTitle}
        />
        {formik.touched.postTitle && formik.errors.postTitle ? (
          <div className="col text-danger">{formik.errors.postTitle}</div>
        ) : null}
      </div>
      <div className="row my-2">
        <label htmlFor="postBody" className="col-form-label">
          Post Body
        </label>
        <input
          className="form-control"
          id="postBody"
          name="postBody"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.postBody}
          style={{ height: "200px", paddingTop: "0px", paddingLeft: "0px" }}
        />
        {formik.touched.postBody && formik.errors.postBody ? (
          <div className="col text-danger">{formik.errors.postBody}</div>
        ) : null}
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-success">
          Add Post
        </button>
      </div>
    </form>
  );
}
