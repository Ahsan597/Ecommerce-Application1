import React, { useContext,useState, useEffect } from 'react';
import store2 from "./../assets/store2.jpg"
import { Grid, Card } from '@mui/material'
import "./Home.css";
import { useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { CartContext } from './context/CartContext.js';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
// const ITEMS_PER_PAGE = 6;

export default function Home() {
    // const [data, setData] = useState([1, 8, 8, 1])
    const { id } = useParams();
    const [data2, setData2] = useState([8, 8, 8, 8])
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [product, setProduct] = React.useState({});
    const [productPrice2, setProductPrice2] = useState();
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1); // Default quantity set to 1
    const [totalPrice, setTotalPrice] = useState(productPrice2); // Initial total price
  
    // Function to handle quantity change
    const handleQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value); // Convert input to an integer
      setQuantity(newQuantity); // Update quantity state
      setTotalPrice(newQuantity * productPrice2); // Update total price
    };
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
            const response = await  fetch('http://localhost:4200/product/getpro?page=${currentPage}&limit=18')
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // setProducts(data.products); // Assume the data has a `products` field
            setProducts(data?.products)
            console.log(data)
            setTotalPages(Math.ceil(data.total / 5)); 
            setProductPrice2(data.products)
            // Assuming the price comes with the product data
            // if (data.products.length > 0) {
            //     setProductPrice2(data.products[0].price); // Example: Set price of the first product
            // }
                // .then(res => res.json())
                // .then(data => {
                //     console.log(data)
                    // setProducts(data?.data1)
                //     setProductPrice2(data.data1)
                //     console.log("productsprice", data.data1)
                // })
                // .catch(err => {
                //     console.error('Error fetching products:', err);
                // });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts()
    }, [currentPage]);

    return (
        <div>
            <div>
                {/* <div className="background">
                </div> */}
                <div className="back2">
                    <div><h1 className="homeheader">Save your time</h1>
                        <h1 className="homeheader homeheader2"> Buy from Capital Store</h1>
                    </div>
                    {/* <li>{products}</li> */}
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
                                                <img src={`http://localhost:4200${item.productImageurl}` } alt={item.productName} width="80" />
                                                <h5 className='nqp33'>{item?.productName}</h5>
                                                <div className='pricequan33'>
                                                    <h6 className='price'>Price: {totalPrice} </h6>
                                                    <label className='quantity' htmlFor="quantity">Quantity:</label>
                                                    <select
                                                    id="quantity" 
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
                                                    >
                                                        {[...Array(10).keys()].map(num => (
                                                            <option key={num + 1} value={num + 1}>
                                                                {num + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <button className='btncart33'  onClick={() => addToCart(product)}>Add to Cart</button></div>
                                          </Card>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </div>
                </div>
            </div>
            <Stack spacing={2} className='pag2'>
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} size='large' className="pag" />
            </Stack>
            <div className="relatedproduct333">
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
            </div >
        </div >
    )
}
