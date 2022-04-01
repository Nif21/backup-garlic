import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import changeToken from "../../redux/actions/authAction";

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  async function login(body) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://garlic-backend.herokuapp.com/api/v1/login",
      requestOptions
    );
    if (response.ok) {
      const result = await response.text();
      dispatch(changeToken(result));
      router.push("/");
    } else {
      const result = await response.text();
      alert(result);
    }
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required").min(3, "Too Short!"),
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-primary-dark py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 ">
          <div>
            <img
              className="mx-auto h-36 w-auto"
              src="/logo_ipb.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
              Gunakan Akun IPB
            </h2>
          </div>
          <div className=" flex-grow bg-white p-8 rounded">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                login(values);
              }}
            >
              <Form>
                <label className={styles.label} htmlFor="Email">
                  Email
                </label>
                <Field
                  className={styles.field}
                  id="email"
                  name="email"
                  type="email"
                />
                <ErrorMessage
                  component="a"
                  className={styles.errorMsg}
                  name="email"
                />
                <label className={styles.label} htmlFor="Email">
                  Password
                </label>
                <Field
                  className={styles.field}
                  id="password"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  component="a"
                  className={styles.errorMsg}
                  name="password"
                />
                <div className="mt-8">
                  <button type="submit" className={styles.button}>
                    Login
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  label: "block text-black text-sm font-bold pt-2 pb-1",
  field:
    "bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none",
  button:
    " group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-coco hover:bg-primary-darkcoco",
  errorMsg: "text-red-500 text-sm",
};

export default Login;
