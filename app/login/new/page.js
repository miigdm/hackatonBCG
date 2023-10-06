"use client";
import {
    Button,
    TextField,
    Container,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem
  } from '@mui/material';
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  
  const validationSchema = Yup.object({
    nombre: Yup.string().required('Nombre es requerido'),
    telefono: Yup.string().required('Teléfono es requerido'),
    email: Yup.string().email('Email no válido').required('Email es requerido'),
    password: Yup.string().min(6, 'Debe tener al menos 6 caracteres').required('Contraseña es requerida'),
    direccion: Yup.string().required('Dirección es requerida'),
    rubro: Yup.string().required('Rubro es requerido'),
    rol: Yup.string().required('Rol es requerido')
  });
  
  const RegisterForm = () => {
    const formik = useFormik({
      initialValues: {
        nombre: '',
        telefono: '',
        email: '',
        password: '',
        direccion: '',
        rubro: '',
        rol: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log('Form data', values);
      },
    });
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          Registro de Usuarios
        </Typography>
  
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                fullWidth
                name="nombre"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                helperText={formik.touched.nombre && formik.errors.nombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Teléfono"
                fullWidth
                name="telefono"
                value={formik.values.telefono}
                onChange={formik.handleChange}
                error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                helperText={formik.touched.telefono && formik.errors.telefono}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Dirección"
                fullWidth
                name="direccion"
                value={formik.values.direccion}
                onChange={formik.handleChange}
                error={formik.touched.direccion && Boolean(formik.errors.direccion)}
                helperText={formik.touched.direccion && formik.errors.direccion}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rubro"
                fullWidth
                name="rubro"
                value={formik.values.rubro}
                onChange={formik.handleChange}
                error={formik.touched.rubro && Boolean(formik.errors.rubro)}
                helperText={formik.touched.rubro && formik.errors.rubro}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={formik.touched.rol && Boolean(formik.errors.rol)}>
                <InputLabel>Rol</InputLabel>
                <Select
                  name="rol"
                  label="Rol"
                  value={formik.values.rol}
                  onChange={formik.handleChange}
                >
                  <MenuItem value="empresa">Empresa</MenuItem>
                  <MenuItem value="albergue">Albergue</MenuItem>
                </Select>
                {formik.touched.rol && <div style={{ color: 'red' }}>{formik.errors.rol}</div>}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Registrar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  };
  
  export default RegisterForm;
  