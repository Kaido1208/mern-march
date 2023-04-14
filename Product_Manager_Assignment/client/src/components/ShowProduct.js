import React, {useEffect, useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';

const ShowProduct = (props) => {

    const {id} = useParams();
    const [oneProduct, setOneProduct] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data)
                setOneProduct(res.data);
            })
            .catch((err) => console.log(err))
    }, [id]);

    return (
        <div>
            <h1>Show A Product:</h1>
                <h2>Product Name: {oneProduct.title}</h2>
                <p>Price: ${oneProduct.price}</p>
                <p>Description: {oneProduct.description}</p>
                <Link to={"/"}> Home </Link>
        </div>
    );
};

export default ShowProduct;