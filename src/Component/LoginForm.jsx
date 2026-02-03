import { Field, Form, Formik, ErrorMessage } from "formik";
import { loginSchema } from "../Schema/loginSchema";
import { useBloggingContext } from "../Context/BloggingContext/BloggingContext";

const LoginForm = () => {
  const { handleLogin } = useBloggingContext();

  const handleLoginSubmit = (values) => {
    const user = { email: values.email };
    handleLogin("login", user);
  };

  return (
    <div className="">
      <div className="shadow-md p-4 w-120 rounded-md">
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLoginSubmit}
        >
          {() => (
            <Form>
              <div className="flex justify-center">
                <div>
                  <h2 className="text-xl mb-4 text-slate-700">Login</h2>
                  <div>
                    <label
                      className="block mb-2 text-slate-600"
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="p-2 shadow-md w-full"
                    />
                    <div className="h-6 mt-1">
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block mb-2 text-slate-600"
                      htmlFor="email"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="p-2 shadow-md w-full"
                    />
                    <div className="h-6 mt-1">
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      className="bg-cyan-900 p-3 text-slate-300 rounded-md w-full"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginForm;
