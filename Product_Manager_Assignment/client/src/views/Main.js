import React, {useState} from "react";
import AddProduct from '../components/AddProduct';
import ShowAllProduct from "../components/ShowAllProduct";

const Main = (props) => {

    const [products, setProducts] = useState([]);

    return (
        <div>
            <AddProduct producs={products} setProducts={setProducts}/>
            <ShowAllProduct products={products} setProducts={setProducts}/>
        </div>
    );
};

export default Main;