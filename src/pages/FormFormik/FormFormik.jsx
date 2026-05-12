import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().trim().required(),
    email: Yup.string().trim().required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Password should be at least 8 characters"),
    phone: Yup.string().trim().matches(/^\+380\d{9}$/, "Phone format: +380*********"),
    course: Yup.string().trim().required("Course is required"),
    merch: Yup.array().of(Yup.string()).min(1, "Choose at least 1 item")
});

export default function FormFormik() {
    const handleSubmit = (values) => {
        console.log("Sending data...", values);
    }

    return (
        <>
            <h1>Form Formik:</h1>

            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    password: "",
                    phone: "",
                    course: "frontend",
                    level: "beginner",
                    format: "online",
                    wantsCertificate: false,
                    merch: [],
                    comment: ""
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {() => {
                    return (
                        <Form>
                            <Field
                                id="fullName"
                                type="text"
                                name="fullName"
                                placeholder="Enter full name"
                            />
                            <ErrorMessage name="fullName">
                                {(message) => <p style={{ color: "red" }}>{message}</p>}
                            </ErrorMessage>

                            <Field
                                id="email"
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                            <ErrorMessage name="email">
                                {(message) => <p style={{ color: "red" }}>{message}</p>}
                            </ErrorMessage>
                            <Field
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                            <ErrorMessage name="password">
                                {(message) => <p style={{ color: "red" }}>{message}</p>}
                            </ErrorMessage>
                            <Field
                                id="phone"
                                type="text"
                                name="phone"
                                placeholder="Phone"
                            />
                            <ErrorMessage name="phone">
                                {(message) => <p style={{ color: "red" }}>{message}</p>}
                            </ErrorMessage>

                            <Field
                                as="select"
                                id="course"
                                name="course"
                            >
                                <option value="frontend">Frontend</option>
                                <option value="react">React</option>
                                <option value="node">Node.js</option>
                                <option value="fullstack">Fullstack</option>
                            </Field>
                            <ErrorMessage name="course">
                                {(message) => <p style={{ color: "red" }}>{message}</p>}
                            </ErrorMessage>

                            <label>
                                <Field
                                    type="radio"
                                    name="level"
                                    value="middle"
                                />
                                All I know
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="level"
                                    value="advanced"
                                />
                                Advanced
                            </label>

                            <label>
                                <Field
                                    type="radio"
                                    name="format"
                                    value="online"
                                />
                                Online
                            </label>
                            <label>
                                <Field
                                    type="radio"
                                    name="format"
                                    value="offline"
                                />
                                Offline
                            </label>

                            <label>
                                <Field
                                    type="checkbox"
                                    name="wantsCertificate"
                                />
                                I need certificate
                            </label>


                            <h2>Merch:</h2>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="merch"
                                    value="t-shirt"
                                />
                                T-shirt
                            </label>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="merch"
                                    value="notebook"
                                />
                                Notebook
                            </label>
                            <label>
                                <Field
                                    type="checkbox"
                                    name="merch"
                                    value="stickers"
                                />
                                Stickers
                            </label>
                            <ErrorMessage name="merch">
                                {(message) => <p style={{ color: "red" }}>{message}</p>}
                            </ErrorMessage>

                            <Field
                                id="comment"
                                as="textarea"
                                name="comment"
                            />

                            <button type="submit">Create order</button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}