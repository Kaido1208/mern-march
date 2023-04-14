import React, {useState} from 'react';
import axios from 'axios';

const CreateProduct = (props) => {

    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res.data);
            setProducts([...products, res.data]);
            setTitle("");
            setPrice("");
            setDescription("");
        })
        .catch((err) => console.log(err));
    }   

    return(
        <div>
            <h1>Product Manager</h1>
            
            <form onSubmit={submitHandler}>
                <div className='product'>
                    <label>Title</label>
                    <input onChange={(event) => setTitle(event.target.value)}
                    value={title}
                    name="title"
                    type="text"
                    />
                </div>

                <div className='product'>
                    <label>Price</label>
                    <input onChange={(event) => setPrice(event.target.value)}
                    value={price}
                    name="price"
                    type="number"
                    />
                </div>

                <div className='product'> 
                    <label>Description</label>
                    <input onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    name="description"
                    type="text"
                    />
                </div>

                <input type="submit" value="Create"/>
            </form>
        </div>
        
    )
}

export default CreateProduct;