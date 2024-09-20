import React, { useState, useEffect } from 'react'
import "./Card.css"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import { Grid, Card } from '@mui/material'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}))
export default function Card1() {
    const [value, setValue] = React.useState(0);
    const classes = useStyles()
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [productPrice2, setProductPrice2] = useState();
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
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} size='large' className="pag" />
            </Stack>
        </div>
    )
}
