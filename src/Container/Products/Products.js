import React, { useEffect, useState } from 'react';
import "./Products.css"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import ClipLoader from "react-spinners/ClipLoader";
import { PulseLoader } from 'react-spinners';

function Products(props) {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [category, setCategory] = useState([])
    const [selectCategory, setSelectCategory] = useState("")

   console.log(selectCategory);

    const getdata = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();

        let categoryArr = []

        data.map((v, i) => {
            if (!categoryArr.includes(v.category)) {
                categoryArr.push(v.category)
            }

        })


        setCategory(categoryArr)

        console.log(categoryArr);

        setProductsData(data)
        setLoading(false);

    }

    const hendleSearchSort = () => {

        const fData = productsData.filter((v) => (
            v.title.toLowerCase().includes(search.toLowerCase()) ||
            v.price.toString().includes(search) ||
            v.description.toLowerCase().includes(search.toLowerCase())

        ))

        const sData = fData.sort((a, b) => {
            if (sort === 'az') {
                return a.title.localeCompare(b.title)
            } else if (sort === 'za') {
                return b.title.localeCompare(a.title)
            } else if (sort === 'lh') {
                return a.price - b.price
            } else if (sort === 'hl') {
                return b.price - a.price
            }

        })

        if (selectCategory) {
            if (selectCategory === 'all') {
                return sData;
            } else {
            const cData = sData.filter((v) => (
                v.category === selectCategory
            ))
            return cData;
        }
        }
        
        return sData;
        
    }

    const finalData = hendleSearchSort()


    useEffect(() => {
        getdata()

    }, [])



    return (

        <section id='products'>
            <h2 className='main-title'>Product Data</h2>
            <p className='sub-title'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className='container'>
                <input className='input-group searchinput' type='text' name='search' placeholder='Search Products' onChange={(e) => setSearch(e.target.value)} />

                <select name='sortvalue' className='form-select' onChange={(e) => setSort(e.target.value)}>
                    <option value={"0"}>-- Select Sort --</option>
                    <option value={"az"}>Title: A to Z</option>
                    <option value={"za"}>Title: Z to A</option>
                    <option value={"lh"}>Price: Low to High</option>
                    <option value={"hl"}>Price: High to Low</option>
                </select>
              
                
                    <button type="button" class={`btn categorybtn ${selectCategory === 'all' ? "btn-primary" : "btn-outline-primary" }`} value={"all"} onClick={(e) => setSelectCategory(e.target.value)}>All Category</button>
                    {
                    category.map((v, i) => (
                        <button type="button"  value={v} class={`btn categorybtn ${selectCategory === v ? "btn-primary" : "btn-outline-primary" }`} onClick={(e) => setSelectCategory(e.target.value)}
                        >
                            {v}
                            </button>
                    ))
                }
             
                {
                    loading ?
                        <PulseLoader className='loading' color={"black"} loading={loading} size={10} />
                        :
                        <div className='row product-data'>
                            {
                                finalData.map((v, i) => (
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
                }

            </div>
        </section>

    );
}

export default Products;