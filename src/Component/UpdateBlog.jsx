import { Formik, Form, Field, ErrorMessage } from "formik";
import { blogSchema } from "../Schema/blogSchema";
import { useBloggingContext } from "../Context/BloggingContext/BloggingContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateBlog = () => {
  const location = useLocation();
  const isUpdate = location.state;
  const navigate = useNavigate();

  const { updateBlog } = useBloggingContext();

  const [updateState, setUpdateState] = useState(false);

  const handleUpdatePost = (values, { resetForm }) => {
    const updatedBlog = { ...values };
    updateBlog(isUpdate?.id, updatedBlog);
    navigate(location.pathname, { state: updatedBlog });
    resetForm();
    setUpdateState(true);
  };

  return (
    <div className="w-full">
      <h2>Update Blog</h2>
      <div className="mt-3">
        <Formik
          initialValues={{
            title: isUpdate?.title || "",
            category: isUpdate?.category || "",
            content: isUpdate?.content || "",
          }}
          validationSchema={blogSchema}
          onSubmit={handleUpdatePost}
          enableReinitialize
        >
          {({ isSubmitting, values }) => (
            <Form>
              {/* Title */}
              <div className="">
                <label htmlFor="title" className="">
                  Title
                </label>
                <Field
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Enter Post Title"
                  className="= w-full rounded-md p-2 mt-2 mb-1 shadow-md outline-none"
                  value={values.title}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="title"
                    component="p"
                    className=" text-red-500 "
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mt-1">
                <label htmlFor="category">Category</label>
                <br />
                <Field
                  as="select"
                  name="category"
                  id="category"
                  className="mt-2 shadow-md p-2 rounded-md mb-1"
                  value={values.category}
                >
                  <option value="">Select Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Travelling">Travelling</option>
                  <option value="Coding">Coding</option>
                  <option value="Trading">Trading</option>
                </Field>
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="category"
                    component="p"
                    className=" text-red-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-3">
                <label htmlFor="content" className="">
                  Content
                </label>
                <Field
                  name="content"
                  id="content"
                  as="textarea"
                  rows="10"
                  placeholder="Enter Post Content"
                  className="shadow-md w-full rounded-md p-2 mt-2"
                  value={values.content}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="content"
                    component="p"
                    className=" text-red-500"
                  />
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="px-5 py-3 bg-sky-900 text-slate-200 rounded-md mt-3 cursor-pointer"
              >
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {updateState && (
        <p className="text-green-600 mt-3">Blog Updated Successfully.</p>
      )}
    </div>
  );
};
export default UpdateBlog;
