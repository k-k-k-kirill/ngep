"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactSection.module.css";
import Section from "../Section";
import Button from "../Button/Button";

interface ContactSectionProps {
  data: any;
}

const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const { Title } = data;

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission status

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    Email: Yup.string().email("Invalid email").required("Email is required"),
    CompanyWebsite: Yup.string().url("Invalid URL"),
    Message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    Name: "",
    Email: "",
    CompanyWebsite: "",
    Message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/form-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: values,
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true); // Set submission status to true on success
        resetForm(); // Optional: Reset the form fields
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Section className="bg-greyish py-5">
        <div className="container mx-auto px-4">
          <h2>Thank You!</h2>
          <p>
            Your message has been successfully sent. We will get back to you
            soon.
          </p>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-greyish py-5">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>{Title && <h2>{Title}</h2>}</div>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-2">
                  <Field
                    className={styles.textInput}
                    type="text"
                    name="Name"
                    placeholder="Name*"
                  />
                  <ErrorMessage name="Name" component="div" />
                </div>

                <div className="mb-2">
                  <Field
                    className={styles.textInput}
                    type="email"
                    name="Email"
                    placeholder="Email*"
                  />
                  <ErrorMessage name="Email" component="div" />
                </div>

                <div className="mb-2">
                  <Field
                    className={styles.textInput}
                    type="text"
                    name="CompanyWebsite"
                    placeholder="Company Website"
                  />
                  <ErrorMessage name="CompanyWebsite" component="div" />
                </div>

                <div className="mb-2">
                  <Field
                    className={`${styles.textInput} ${styles.textArea}`}
                    as="textarea"
                    name="Message"
                    placeholder="Message*"
                  />
                  <ErrorMessage name="Message" component="div" />
                </div>

                <Button
                  type="submit"
                  className="ml-auto"
                  disabled={isSubmitting}
                  title={"Submit"}
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
