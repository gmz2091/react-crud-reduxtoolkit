import {
  Container,
  Grid,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import { makeStyles } from '@material-ui/core/styles';
import Products from '../../components/Products';
import { fetAllProducts } from '../../redux/slices/products';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import CellRender from './cellRnder';

// const useStyles = makeStyles((theme) => ({
//   formWrapper: {
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(8),
//   },
// }));

const nameProducts = [
  {
    title: 'code',
    headerName: 'Code',
  },
  {
    title: 'name',
    headerName: 'Name',
  },
  {
    title: 'description',
    headerName: 'Description',
  },
  {
    title: 'price',
    headerName: 'Price',
  },
  {
    title: 'categories.name',
    headerName: 'Categories',
  },

];

const ProductsList = () => {
  const { list: listProducts } = useSelector((state) => state.products);
  // const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
    dispatch(fetAllProducts());
  }, []);

  return (
    <Grid container>
      <Products />
      {/* <Grid item xs={12}>
        <Typography>
          Products List
        </Typography>
      </Grid> */}
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <div>
            <Grid className="ag-theme-alpine" style={{ height: 300, width: '100%' }} item xs={12}>
              <AgGridReact
                rowData={listProducts}
                frameworkComponents={{
                  cellRender: CellRender,
                }}
              >
                {nameProducts.map((item) => (
                  <AgGridColumn
                    headerName={item.headerName}
                    field={item.title}
                  />
                ))}
                <AgGridColumn
                  headerName="Status"
                  cellRenderer="cellRender"
                />
              </AgGridReact>
            </Grid>
          </div>
        </Container>
      </Grid>

    </Grid>

  );
};

export default ProductsList;
