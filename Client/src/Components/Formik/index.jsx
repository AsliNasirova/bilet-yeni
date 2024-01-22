import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

const Formikk = ({getData}) => {
    async function addMenu(value) {
       const res=await axios.post("http://localhost:4000",value)
       getData() 
    }
  return (
    <Formik
      initialValues={{ image: '', title: '', info: '' ,image2: '' ,author: '' ,price: '' }}
      validationSchema={Yup.object({
        image: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        title: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        info: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        image2: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        author: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        price: Yup.number()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(value, { resetForm }) => {
        addMenu(value)
        resetForm()  
      }}
    >
      <Form>
        <label htmlFor="image">Image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="info">Info</label>
        <Field name="info" type="text" />
        <ErrorMessage name="info" />

        <label htmlFor="image2">Image2</label>
        <Field name="image2" type="text" />
        <ErrorMessage name="image2" />

        <label htmlFor="author">Author</label>
        <Field name="author" type="text" />
        <ErrorMessage name="author" />

        <label htmlFor="price">price</label>
        <Field name="price" type="number" />
        <ErrorMessage name="price" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Formikk
