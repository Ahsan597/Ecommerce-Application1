import React, { useState, useEffect } from 'react';
import { Grid, Card} from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Allproducts() {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const deleteProduct = async (id) => {
        try {
          await axios.delete(`http://localhost:4200/product/delpro/${id}`);
          setProducts(products.filter(item => item._id !== id));
          alert('Product deleted successfully');
        } catch (err) {
          console.error('Error deleting product:', err.message);
          alert('Failed to delete product');
        }
      };

    useEffect(() => {

        const fetchProducts = async () => {

            fetch('http://localhost:4200/product/getpro')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setProducts(data?.data1)
                })
                .catch(err => {
                    console.error('Error fetching products:', err);
                });
        };

        fetchProducts()
    }, []);
    return (
        <div style={{ marginLeft: "22vmax", marginTop: "-50vmax" }}>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Select Specific Product" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Devices" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Furniture" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <div className="marginbox">
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {
                        products.map((item) =>
                            <Grid item xs={12} sm={6} md={4} key={item?._id}>

                                <Card cols={0} className="cardimg" >
                                    <img src={`http://localhost:4200${item.productImageurl}`} width="200" />
                                    <h5 className='nqp33'>{item?.productName}</h5>
                                    <div className='pricequan33'><h6 className=''>Price: {item?.productPrice} </h6>
                                        <h6 className='nqp133'>Quantity:{item?.productQuantity} </h6>
                                        <button className='btncart33'><Link to={`/updateproduct/${item._id}`}>Update</Link></button>
                                        <button className='btncart33'><Link onClick={() => deleteProduct(item._id)}>Delete</Link></button>
                                    </div>

                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </div>
    )
}
