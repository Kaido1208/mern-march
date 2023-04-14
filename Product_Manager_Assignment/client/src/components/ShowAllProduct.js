import axios from 'axios';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const ShowAllProduct = (props) => {

    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    const deleteFilter = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);

                const newList = products.filter((product, index) => product._id !== id)
                setProducts(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div> 
            <h1>All Products:</h1>
            {
                products.map((product, index) => (
                    <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <Link to={`/product/edit/${product._id}`}> Edit </Link>
                        <button onClick={() => deleteFilter(product._id)}> Delete </button>
                    </div>
                ))
            }
        </div>
    )
}

export default ShowAllProduct;