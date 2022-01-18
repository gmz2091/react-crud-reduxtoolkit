import {
  Container, Grid, Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Textfield from '../FormsUI/Textfield';
import Button from '../FormsUI/Button';
import Checkbox from '../FormsUI/Checkbox';
import { createProduct, getCategories } from '../../redux/slices/products';
import Select from '../FormsUI/Select';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  code: '',
  name: '',
  description: '',
  price: '',
  category_id: '',
  status: false,
};

const validationSchema = () => ({
  code: Yup.string()
    .required('Required'),
  name: Yup.string()
    .required('Required'),
  description: Yup.string()
    .required('Required'),
  price: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),
  category_id: Yup.number()
    .integer()
    .typeError('Select a category')
    .required('Required'),
  status: Yup.boolean(),
});

const FORM_VALIDATION_SCHEMA = Yup.object(validationSchema());

const Products = () => {
  const { categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION_SCHEMA}
              onSubmit={(values, { resetForm }) => {
                resetForm();
                dispatch(createProduct(values, 'TOKEN'));
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      New Product
                    </Typography>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <Textfield
                      name="code"
                      label="Code"
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <Textfield
                      name="name"
                      label="Name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="description"
                      label="Description"
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <Textfield
                      name="price"
                      label="Price"
                    />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Select
                      name="category_id"
                      label="Category"
                      options={categories}
                    />
                  </Grid>

                  <Grid item sm={6}>
                    <Checkbox
                      name="status"
                      legend="Status"
                      label="Status"
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <Button>
                      Submit Form
                    </Button>
                  </Grid>

                </Grid>

              </Form>
            </Formik>

          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Products;
