import React, { useState, useEffect } from 'react'
import "./Card.css"
// import ButtonBase from "@material-ui/core/ButtonBase";
import Tabs from '@mui/material/Tabs';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Tab from '@mui/material/Tab';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BuildIcon from '@mui/icons-material/Build';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import StarsIcon from '@mui/icons-material/Stars';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ChairIcon from '@mui/icons-material/Chair';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        // padding: theme.spacing(2)
    }
}))
export default function Card1() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles()
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [productPrice2, setProductPrice2] = useState();
    const [data, setData] = useState([1, 3, 3, 3, 3, 3, 3, 2, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8])
    const [data2, setData2] = useState([8, 8, 8, 8])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4200/product/getpro?page=${currentPage}&limit=18')
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data?.products)
                console.log(data)
                setTotalPages(Math.ceil(data.total / 5));
                setProductPrice2(data.products)

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts()
    }, [currentPage]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };
    return (
        <div>
            {/* <div className=" "> */}
                 {/* <h1 className="headcontent"></h1> */}
                {/* <h3 className="headcontent1">Shop safe from home</h3> */}
                {/* <div className="productsicon">

                    <Box sx={{ maxWidth: 1200, bgcolor: 'background.paper' }}> <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <div className="productall">
                            <Link className="productlink" to="/product">
                                <StarsIcon className="productcolor" style={{ fontSize: 100 }} fontSize="small"></StarsIcon>
                                <p className="productname">All products</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="/device"><ImportantDevicesIcon className="productcolor" style={{ fontSize: 100 }}></ImportantDevicesIcon>
                                < p className="productname">Devices</p></Link>
                        </div>
                        <div className="productall" >
                            <Link className="productlink" to="/phone">
                                <PhoneAndroidIcon className="productcolor" style={{ fontSize: 100 }}></PhoneAndroidIcon>
                                <p className="productname">Phones</p></Link>
                        </div>
                        <div>
                            <Link className="productlink" to="/toys">
                                <SmartToyIcon className="productcolor" style={{ fontSize: 100 }}></SmartToyIcon>
                                <p className=" prodtoy">Toys</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="furniture">
                                <ChairIcon className="productcolor" style={{ fontSize: 100 }}></ChairIcon>
                                <p className="productname">Furniture</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="sports">
                                <SportsCricketIcon className="productcolor" style={{ fontSize: 100 }}></SportsCricketIcon>
                                <p className="productname">Sports</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="child">
                                <ChildCareIcon className="productcolor" style={{ fontSize: 100 }}></ChildCareIcon>
                                <p className="productname">Children</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="tools">
                                <BuildIcon className="productcolor" style={{ fontSize: 100 }}></BuildIcon>
                                <p className="productname">Tools</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="/books">
                                <MenuBookIcon className="productcolor" style={{ fontSize: 100 }}></MenuBookIcon>
                                <p className="productname">Books</p></Link>
                        </div>
                        <div className="productall">
                            <Link className="productlink" to="/health">
                                <HealthAndSafetyIcon className="productcolor" style={{ fontSize: 100 }}></HealthAndSafetyIcon>
                                <p className="productname">Health</p></Link>
                        </div>
                    </Tabs></Box>
                </div> */}
            {/* </div> */}
            <div className="margintop">
                <div className="categories">
                    <h4 className='category123'>Categories</h4>
                    <div className="divproducts">
                        <Link to="/product" className="productlink "><p className=" prodlink">All products</p></Link>
                        <Link to="/device" className="productlink"><p className=" prodlink">Devices</p></Link>
                        <Link to="/phone" className="productlink "><p className="prodlink">Phone</p></Link>
                        <Link to="/child" className="productlink"><p className=" prodlink">Children</p></Link>
                        <Link to="/toys" className="productlink "><p className=" prodlink">Toys</p></Link>
                        <Link to="/sports" className="productlink"><p className=" prodlink">Sports</p></Link>
                        <Link to="/furniture" className="productlink" > <p className=" prodlink">Furniture</p></Link>
                        <Link to="/tools" className="productlink" > <p className=" prodlink">Tools</p></Link>
                        <Link to="/health" className="productlink" > <p className=" prodlink">Health</p></Link>
                        <Link to="/books" className="productlink" > <p className=" prodlink">Books</p></Link>
                    </div>
                </div>
                <div className="productborder">
                    {/* <div className="imgcard">
                   </div>*/}
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {
                            products.map((item) =>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Card cols={3} className="cardimg">
                                        <img src={`http://localhost:4200${item.productImageurl}`} alt={item.productName} width="80" />
                                        <h5 className='nqpproducts'>{item?.productName}</h5>
                                        <div className='pricequan'><h6 className='priceproducts'>Price:  </h6>
                                            <label className='quantityproducts' htmlFor="quantity">Quantity: </label>
                                            <select
                                            // id="quantity" 
                                            // value={quantity}
                                            // onChange={}
                                            >
                                                {[...Array(10).keys()].map(num => (
                                                    <option key={num + 1} value={num + 1}>
                                                        {num + 1}
                                                    </option>
                                                ))}
                                            </select>
                                            <button className='btncartproducts'>Add to Cart</button>
                                        </div>
                                    </Card>
                                </Grid>
                            )}
                    </Grid>
                </div>
            </div>
            <Stack spacing={2} className="pagination">
                <Pagination  count={totalPages} page={currentPage} onChange={handlePageChange} size='large' className="pag"  />
            </Stack>
            {/* <div className="relatedproduct2">
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
            </div> */}
        </div>
    )
}
