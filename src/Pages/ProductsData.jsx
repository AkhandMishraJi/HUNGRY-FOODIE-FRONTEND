import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Redux/Slices/ProductSlice";

function ProductsData() {
    const {productsData} = useSelector((state)=>state.product)
    const dispatch = useDispatch() 

    useEffect(()=>{
        dispatch(getAllProducts(''))
    }, [])
    return( <div className=" bg-gradient-to-r from-amber-50 to-orange-300 p-10 gap-1">
        <h1 className="text-5xl pb-10 pl-10">Products : </h1>
        <div className="flex flex-wrap gap-10 justify-center">
            
    {productsData.map((product ) =>{
    console.log(product.inStock);
    
    return (
        product.inStock && (
    <Link to={`products/${product._id}`}><div className="bg-gradient-to-r from-amber-50 to-orange-300 py-2 px-10 border border-orange-500 items-center hover:text-lg hover:font-bold hover:bg-gradient-to-r hover:from-orange-300 hover:to-amber-50 rounded-3xl  max-w-80  gap-5" key={product._id}>
    <div><img src={product.productImage} alt={product.productName} width={100} height={100} /></div>
    <div className="text-xl">{product.productName}</div>
    <div><h1 className="text-lg">Description :</h1><p className="text-sm">{product.description}</p></div>
    <div><h1 className="text-lg">Category :</h1><p className="text-sm">{product.category}</p></div>
    <div><h1 className="text-lg">Price :</h1><p className="text-sm">{product.price}</p></div>

    </div></Link>))})}
        </div>
    
    </div>)
   
}

export default ProductsData