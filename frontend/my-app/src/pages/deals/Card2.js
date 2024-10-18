import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Card2.css";
import axios from 'axios';
import { makeStyles } from '@mui/styles'
import { Grid, Card } from '@mui/material'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
                <div className="dailydeals">
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