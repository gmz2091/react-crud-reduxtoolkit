import {
  Box, Button, Container, Grid, Paper, TextField, Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialVales = () => ({
    email: '',
    password: '',
  });

  const validationSchema = () => ({
    email: Yup.string()
      .email('Invalid email')
      .required(true),
    password: Yup.string()
      .min(6, 'Min 6 characters')
      .required(true),
  });

  const formik = useFormik({
    initialValues: initialVales(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (values) => {
      console.log(values);
      dispatch(login());
      navigate('/');
    },
  });

  return (
    <Container>
      <Box p={3} component="form" sx={{ display: 'flex', justifyContent: 'center', mt: 2 }} onSubmit={formik.handleSubmit}>
        <Grid xs={12} lg={6} item>
          <Paper elevation={23}>
            <Typography component="h1" variant="subtitle1" p={3}>Sign In</Typography>
            <Box p={3}>
              <TextField
                label="Email"
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                fullWidth
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                margin="normal"
              />
              <Button sx={{ my: 3, py: 1.5 }} fullWidth type="submit" variant="contained" color="primary">Sign In</Button>
            </Box>
          </Paper>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginForm;
