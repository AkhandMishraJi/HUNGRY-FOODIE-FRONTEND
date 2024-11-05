import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getProductDetails } from "../../Redux/Slices/ProductSlice"
import Layout from "../../Layouts/Layout"
import { addProductToCart, getCartDetails, removeProductFromCart } from "../../Redux/Slices/CartSlice"
function ProductDetails() {
    const {productId} = useParams()
    const dispatch = useDispatch()
    const [productDetails , setProductDetails] = useState({})
    async function fetchProductDetails() {
      const details = await dispatch(getProductDetails(productId))

      setProductDetails(details?.payload?.data?.data)
      console.log(details);
      
    }
   
    async function handleCart() {
        const response = await  dispatch(addProductToCart(productId))
        if (response?.payload?.data?.success) {
            setIsinCart(true)
            dispatch(getCartDetails())
        }
    }
    async function handleRemove() {
        const response = await dispatch(removeProductFromCart(productId))
        if (response?.payload?.data?.success) {
            setIsinCart(false)
            dispatch(getCartDetails())
        }
    }
    const [isInCart, setIsinCart] = useState(false)
    useEffect( ()=>{
        fetchProductDetails()
    },[productId])
    return(
        <Layout>
           
            <div className="flex gap-10 p-10 m-10  border-2 ring-yellow-400 border-yellow-300 rounded-3xl border-spacing-10">
                <div className="flex justify-center">
                    <img src={productDetails?.productImage} alt={`Product Name: ${productDetails?.productName} Product Description: ${productDetails?.description}`} width={400}/>
                </div>
                <div>
                    <h1 className="text-3xl  text-transparent bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text font-semibold">Product Name:</h1>
                    <p className="text-2xl  text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-mono">{productDetails?.productName}</p>
                    
                    <h1 className="text-3xl  text-transparent bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text font-semibold">Description:</h1>
                    <p className="text-2xl  text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-mono">{productDetails?.description}</p>
    
                    <h1 className="text-3xl  text-transparent bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text font-semibold">Category:</h1>
                    <p className="text-2xl  text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-mono">{productDetails?.category}</p>
                    
                    <h1 className="text-3xl  text-transparent bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text font-semibold">Quantity Available:</h1>
                    <p className="text-2xl  text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-mono">{productDetails?.quantity?? `Unavailable`}</p>
                    <h1 className="text-3xl  text-transparent bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text font-semibold">Price:</h1>
                    <p className="text-2xl  text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text font-mono">{productDetails?.price}</p>
                  <div>{isInCart ? (<><button onClick={()=>handleRemove(productId)} className="border-2 border-yellow-400 bg-orange-400 rounded-md p-2">Remove From Cart</button><button onClick={()=>handleCart(productId)} className="border-2 border-yellow-400 bg-orange-400 rounded-md p-2">Add To Cart</button></>):(<button onClick={()=>handleCart(productId)} className="border-2 border-yellow-400 bg-orange-400 rounded-md p-2">Add To Cart</button>)}</div>
                </div>
                </div>
            
        </Layout>
        )
}

export default ProductDetails