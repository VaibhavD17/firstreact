import React, { useEffect, useState } from 'react';
import "./Products.css"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Form, InputGroup } from 'reactstrap';
import ClipLoader from "react-spinners/ClipLoader";

function Products(props) {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getdata = async () => {
        const response = await fetch ("https://fakestoreapi.com/products")
        const data = await response.json();

        setProductsData(data)

    }

    useEffect(() => {
        getdata()

        setLoading(true);

        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, [])

    console.log(productsData);

    return (

        <section id='products'>
            <h2 className='main-title'>Product Data</h2>
            <p className='sub-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className='container'>
                <div className='row product-data'>
                    {
                        loading ?
                            <ClipLoader className='loading' color={"black"} loading={loading} size={50} />
                            :
                            productsData.map((v, i) => (
                                <div className='col-4' key={v.id}>
                                    <Card
                                        style={{
                                            width: '18rem'
                                        }}
                                    >
                                        <img
                                            alt="Sample"
                                            src={v.image}
                                            height={"300px"}
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {v.title.length >= 20 ? v.title.substring(0, 20) + "..." : v.title}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                {v.price}
                                            </CardSubtitle>
                                            <CardText>
                                                {v.description.length >= 50 ? v.description.substring(0, 50) + "..." : v.description}

                                            </CardText>
                                            <Button>
                                                Add to Cart
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))
                    }

                </div>
            </div>
        </section>

    );
}

export default Products;