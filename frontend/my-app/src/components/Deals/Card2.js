import React, { useState } from 'react'
// import ButtonBase from "@material-ui/core/ButtonBase";
import Tabs from '@mui/material/Tabs';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TabContext from '@mui/lab/TabContext';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import "./Card2.css";
// import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@mui/styles'
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // padding: theme.spacing(2)
    }
}))


export default function Card2() {

    const [value, setValue] = React.useState([]);
    const classes = useStyles()
    const [sup, setSup] = useState()
    const data = [1, 6, 9, 8, 9, 0, 9, 8, 9, 9, 9, 9, 8, 5, 6, 7]
    const [data2, setData2] = useState([8, 8, 8, 8])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    axios.post('', {

        })
            .then(response => {
                setSup = console.log(response)
            })
            .catch(error => {
                console.log(error)
            });    
    return (
        <div>
            
            <div className="dealscol">
                {/* <div className="categories">
                    <h4>Categories</h4>
                    <div className="divproducts">
                        <Link to="/deals" className="productlink "><p className=" prodlink">All products</p></Link>
                        <Link to="/ddevice" className="productlink"><p className=" prodlink">Devices</p></Link>
                        <Link to="/dphone" className="productlink "><p className="prodlink">Phone</p></Link>
                        <Link to="/dchild" className="productlink"><p className=" prodlink">Children</p></Link>
                        <Link to="/dtoys" className="productlink "><p className=" prodlink">Toys</p></Link>
                        <Link to="/dsports" className="productlink"><p className=" prodlink">Sports</p></Link>
                    </div>
                </div> */}
                <div className="dailydeals">
                    {/* <h1 className="dailyweek">Daily Deals
                    </h1> */}
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {data.map(elem => (
                            <Grid item xs={12} sm={6} md={3}>
                                <Card cols={0} className="carddeal222">
                                    <p className='nqp5'>Product Name</p>
                                <div className='pricequan5'><p className=''>Price: 12000</p>
                                    <p className='nqp15'>Quantity: 12/50</p>
                                    <button className='btncart5'>Add to Cart</button>
                                </div>
                                </Card> 
                            </Grid>
                        ))}
                    </Grid>
                </div>
                {/* <div className="weeklydeals">
                    <h1 className="dailyweek">Weekly Deals
                    </h1>
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {data.map(elem => (
                            <Grid item xs={12} sm={6} md={0}>
                                <Card cols={2} className="carddeal222">
                                <p className='nqp5'>Product Name</p>
                                <div className='pricequan5'><p className=''>Price: 12000</p>
                                    <p className='nqp15'>Quantity: 12/50</p>
                                    <button className='btncart5'>Add to Cart</button>
                                </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div> */}

            </div>
            <Stack spacing={2} className="pagination2">
                <Pagination count={10} />
            </Stack>
            <div className=" relateddeals">
                <div className="relatedproduct">
                    <p className="relateddeals">Related to your shopping history</p>
                    <div><Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                    alignItems="flex-start"
                    >
                        {data2.map(elem => (
                            <Grid item xs={12} sm={3} md={3}>
                                <Card cols={3} className=" cardimg2">
                                </Card>
                            </Grid>
                        ))}
                    </Grid></div>
                </div><hr></hr>
            </div>
        </div >


    )
}