import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import axios from "axios";

export default function Checkoutform() {

  const formik = useFormik({
    initialValues: {
      customerName: "",
      customerPhno: "",
      customerGmail: "",
      customerAddress: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required('Customer Name is required'),
      customerPhno: Yup.string().matches(/^[+]?\d+$/, 'Only numeric values are allowed').required('Product No is required').min(8, "atleast 8 no are required ").max(16, 'Max 16 no are allowed'),
      customerGmail: Yup.string().email('Invalid email address').required('Customer Gmail is required').max(45, 'Gmmail max 45 characters'),
      customerAddress: Yup.string().required('Customer Address is required'),
    }),
    onSubmit: (values) => {
      try {
        const response = axios.post(`http://localhost:4200/customers/postcus`, values);
        console.log('Response from server:', response.data);

      } catch (error) {
        console.log("error submitting checkout form", error);

      }

      // values.productItems = newProductItem;
      // addCustomerDetails(values);
    },
  });

  // const addCustomerDetails = async (values) => {
  // const formData = new FormData();
  // formData.append('customerName', values.customerName);
  // formData.append('customerPhno', values.customerPhno);
  // formData.append('customerGmail', values.customerGmail);
  // formData.append('customerAddress', values.customerAddress);

  // try {
  //   axios.post(`http://localhost:4200/customers/postcus`, formData); 

  // } catch (error) {
  //   console.log(error);
  // }
  // };


  return (
    <div style={{ marginTop: "9vmax" }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <TextField
            error={formik.touched.customerName && Boolean(formik.errors.customerName)}
            helperText={formik.touched.customerName && formik.errors.customerName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.customerName}
            label="Enter Name" variant="filled" /></Grid><br />
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}><TextField
          error={Boolean(formik.touched.customerPhno && formik.errors.customerPhno)}
          helperText={formik.touched.customerPhno && formik.errors.customerPhno}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customerPhno}
          label="Enter Phone NO" variant="filled" /></Grid><br />
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}> <TextField
          error={Boolean(formik.touched.customerGmail && formik.errors.customerGmail)}
          helperText={formik.touched.customerGmail && formik.errors.customerGmail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customerGmail}
          label="Enter Gmail" variant="filled" /></Grid><br />
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}><TextField
          error={Boolean(formik.touched.customerAddress && formik.errors.customerAddress)}
          helperText={formik.touched.customerAddress && formik.errors.customerAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customerAddress}
          label="Enter address" variant="filled" /></Grid><br />
        <Button variant='contained'
          sx={{ marginTop: 2 }} color="success" type='submit'>Confirm Order</Button></form>
    </div>
  )
}
