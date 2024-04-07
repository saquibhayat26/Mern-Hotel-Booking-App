import {
  SubmitHandler,
  createForm,
  email,
  minLength,
  required,
} from "@modular-forms/solid";
import { A } from "@solidjs/router";
import Layout from "../layouts/Layout";

type LoginFormData = {
  userName: string;
  password: string;
};

const Login = ({ userName, password }: LoginFormData) => {
  const [loginForm, { Form, Field }] = createForm<LoginFormData>();

  const handleSubmit: SubmitHandler<LoginFormData> = (value, event) => {
    console.log(value);
  };
  return (
    <>
      <Layout>
        <Form class="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 class="text-3xl font-bold">Signin an account</h1>

          <div class="flex flex-col md:flex-col gap-5">
            <div class="flex flex-1 flex-col gap-2">
              <label class="text-gray-700 text-sm font-bold">Username</label>
              <Field
                name="userName"
                validate={[required("Please enter your username.")]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      type="text"
                      placeholder="Username"
                      class="border roundedm w-full py-1 px-2 font-normal"
                    />
                    {field.error && (
                      <div class="text-red-700">{field.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>

            <div class="flex flex-1 flex-col gap-2">
              <label class="text-gray-700 text-sm font-bold">Password</label>
              <Field
                name="password"
                validate={[
                  required("Please enter your email."),
                  minLength(6, "Password must be at least 6 characters"),
                ]}
              >
                {(field, props) => (
                  <>
                    <input
                      {...props}
                      type="password"
                      placeholder="Password"
                      class="border roundedm w-full py-1 px-2 font-normal"
                    />
                    {field.error && (
                      <div class="text-red-700">{field.error}</div>
                    )}
                  </>
                )}
              </Field>
            </div>
          </div>
          <div class="flex flex-row justify-between">
            <p>
              Not registerd?{" "}
              <A href="/register" class="underline">
                Register here
              </A>
            </p>
            <button type="submit">Login</button>
          </div>
        </Form>
      </Layout>
      ;
    </>
  );
};

export default Login;
