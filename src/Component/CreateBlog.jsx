import { Formik, Form, Field, ErrorMessage } from 'formik'
import { blogSchema } from '../Schema/blogSchema'
import { useBloggingContext } from '../Context/BloggingContext/BloggingContext'
import { useState } from 'react'

const CreateBlog = () => {
  const {
    values: { userInfo },
    addBlog,
  } = useBloggingContext()

  const [blogState, setBlogState] = useState(false)

  const handleSubmitPost = (values, { resetForm }) => {
    const newBlog = {
      id: Date.now(),
      user: userInfo.email,
      ...values,
      created_at: Date.now(),
    }
    addBlog(newBlog)
    resetForm()
    setBlogState(true)
  }

  return (
    <div className="w-full">
      <h2>Create Blog</h2>
      <div className="mt-3">
        <Formik
          initialValues={{
            title: '',
            category: '',
            content: '',
          }}
          validationSchema={blogSchema}
          onSubmit={handleSubmitPost}
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
                Post
              </button>
            </Form>
          )}
        </Formik>
        {blogState && (
          <p className="text-green-600 mt-2">Blog added successfully</p>
        )}
      </div>
    </div>
  )
}
export default CreateBlog
