import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import * as Yup from "yup";

export default function ContactForm() {
  const dispatch = useDispatch();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().min(3, "Too Short!").required("Required"),
  });

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(addContact(values));
    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.container}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="phone"
            name="number"
            id={numberFieldId}
            className={css.input}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
