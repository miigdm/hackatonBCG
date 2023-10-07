"use client"
import { Button, TextField, Container, Grid, Typography,  FormControl,  InputLabel,  Select,   MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';


import  GET_CATEGORIES  from '@/lib/queries/categories';

export const dynamic = "force-dynamic";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import createOrder from '@/lib/requests/createOrder';
import createTransaction from '@/lib/requests/createTransaction';
import { create } from 'lodash';



const validationSchema = Yup.object({
  fecha: Yup.date().required('Fecha es requerida'),
  categoria: Yup.string().required('Categoría es requerida'),
  descripcion: Yup.string().required('Descripción es requerida'),
  cantidad: Yup.number().required('Cantidad es requerida').positive().integer(),
});

const AddItemForm =  () => {

    const { data } = useSuspenseQuery(GET_CATEGORIES);

  const formik = useFormik({
    initialValues: {
      fecha: '',
      categoria: '',
      descripcion: '',
      cantidad: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

    let userID = JSON.parse(localStorage.getItem("user"))


    let item =  {
        "date": values.fecha,
        "category": values.categoria,
        "quantity": values.cantidad,
        "userId": (userID) ,
        "description": values.descripcion
    }
    console.log(item)
    createOrder(item).then((data)=>{
        console.log(data)
        if (data["errors"]!=undefined  ){
            alert("Error") // arreglar alguna vez
        }
       
        
       let tx =  {
            "date": new Date(),
            "actionId": 1,
            "orderId": (+(data["data"]["createOrder"]["order"]["id"])),
            "userId": userID
        }
        createTransaction(tx).then((data)=>{
            console.log(data)
        })

    })

    },
  });




  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Añadir una nueva colaboracion
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha"
              type="date"
              fullWidth
              name="fecha"
              value={formik.values.fecha}
              onChange={formik.handleChange}
              error={formik.touched.fecha && Boolean(formik.errors.fecha)}
              helperText={formik.touched.fecha && formik.errors.fecha}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={formik.touched.categoria && Boolean(formik.errors.categoria)}>
              <InputLabel id="categoria-label">Categoría</InputLabel>
              <Select
                name="categoria"
                label="Categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
               
              >
                {data.allCategories.edges.map((category,ix) => (
                    <MenuItem value={category.node.id} key={ix}>{category.node.name} </MenuItem>
                ))} 

               
              </Select>
              {formik.touched.categoria && <div style={{ color: 'red' }}>{formik.errors.categoria}</div>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descripción"
              fullWidth
              multiline
              rows={4}
              name="descripcion"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
              helperText={formik.touched.descripcion && formik.errors.descripcion}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cantidad"
              type="number"
              fullWidth
              name="cantidad"
              value={formik.values.cantidad}
              onChange={formik.handleChange}
              error={formik.touched.cantidad && Boolean(formik.errors.cantidad)}
              helperText={formik.touched.cantidad && formik.errors.cantidad}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" type="submit">
              Añadir Ítem
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddItemForm;
