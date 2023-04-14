import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = (props) => {

    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
            console.log(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault(); 
        axios.put(`http://localhost:8000/api/products/${id}`, {
        title,
        price, 
        description,
    })
    .then((res) => {
        console.log(res.data);
        navigate("/")
    })
    .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Update Your Product</h1>
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

                <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default UpdateProduct;