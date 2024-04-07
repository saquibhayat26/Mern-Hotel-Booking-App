import {
  SubmitHandler,
  createForm,
  email,
  minLength,
  required,
} from "@modular-forms/solid";
import { A } from "@solidjs/router";
import Layout from "../layouts/Layout";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  userEmail: string;
  password: string;
  confirmPassword: string;
};
const Register = ({
  firstName,
  lastName,
  userEmail,
  password,
  confirmPassword,
}: RegisterFormData) => {
  const [registerForm, { Form, Field }] = createForm<RegisterFormData>();

  const handleSubmit: SubmitHandler<RegisterFormData> = (value, event) => {
    console.log(value);
  };
  return (
    <Layout>
      <Form class="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h1 class="text-3xl font-bold">Register an account</h1>
        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-1 flex-col gap-2">
            <label class="text-gray-700 text-sm font-bold">First Name</label>
            <Field
              name="firstName"
              validate={[required("Please enter your first name.")]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="text"
                    placeholder="First Name"
                    class="border roundedm w-full py-1 px-2 font-normal"
                  />
                  {field.error && <div class="text-red-700">{field.error}</div>}
                </>
              )}
            </Field>
          </div>

          <div class="flex flex-1 flex-col gap-2">
            <label class="text-gray-700 text-sm font-bold">Last Name</label>
            <Field
              name="lastName"
              validate={[required("Please enter your last name.")]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="text"
                    placeholder="Last Name"
                    class="border roundedm w-full py-1 px-2 font-normal"
                  />
                  {field.error && <div class="text-red-700">{field.error}</div>}
                </>
              )}
            </Field>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-1 flex-col gap-2">
            <label class="text-gray-700 text-sm font-bold">Email</label>
            <Field
              name="userEmail"
              validate={[
                required("Please enter your email."),
                email("The email address is badly formatted."),
              ]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="email"
                    placeholder="Enter your email"
                    class="border roundedm w-full py-1 px-2 font-normal"
                  />
                  {field.error && <div class="text-red-700">{field.error}</div>}
                </>
              )}
            </Field>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-1 flex-col gap-2">
            <label class="text-gray-700 text-sm font-bold">Password</label>
            <Field
              name="password"
              validate={[
                required("Please enter your password."),
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
                  {field.error && <div class="text-red-700">{field.error}</div>}
                </>
              )}
            </Field>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-1 flex-col gap-2">
            <label class=" text-sm font-bold">Confirm Password</label>
            <Field
              name="confirmPassword"
              validate={[required("Please re-enter your password.")]}
            >
              {(field, props) => (
                <>
                  <input
                    {...props}
                    type="password"
                    placeholder="Confirm Password"
                    class="border roundedm w-full py-1 px-2 font-normal"
                  />
                  {field.error && <div class="text-red-700">{field.error}</div>}
                </>
              )}
            </Field>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <p>
            Already registerd?{" "}
            <A href="/login" class="underline">
              Sign in here
            </A>
          </p>
          <button type="submit">Register</button>
        </div>
      </Form>
    </Layout>
  );
};

export default Register;
