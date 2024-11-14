import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layout";
import BurgerSVG from "../../assets/Images/Burger.svg";
import Denied from "../Auth/Denied";
import { addProduct } from "../../Redux/Slices/AddProductSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddProduct() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const role = useSelector((state) => state.auth.role)
    console.log(role);
    
    const [addProductState ,setAddProductState] = useState({
        productName: '' ,
        description: '' ,
        price: '' ,
        quantity: '',
        category:'',
        productImage:""
    })
    
   


    function handleUserInput(e) {
        const {name , value } = e.target
        setAddProductState({
            ...addProductState,
            [name]: value
        })
    
    }
    
     async function handleFormSubmit(e) { 
    
        e.preventDefault() //Prevent The Form from reloading after clicking submit button
try {
            
        //Adding Form Validation
        if (!addProductState.productName || !addProductState.description || !addProductState.price || !addProductState.quantity || !addProductState.category) {
            toast.error("Mising Form  Values. Please Fill Out All Values");
            return
        }
        if (addProductState.productName.length < 2  || addProductState.productName.length > 100) {
            toast.error("Name Should Be Atleast 2 Characters Long And Less Than 100 Characters")
            return
        }
    
    
            const apiResponse = await dispatch(addProduct(addProductState))
        console.log(`Api response : `, apiResponse);
        
        if (apiResponse?.payload?.data?.success) {
            navigate(`/products/${apiResponse.payload.data.data._id}/`)
        }else{
            toast.error("Failed To Add Product ❌")
        }
    
} catch (error) {
    
}
    }

    return (
        <>
          
              {isLoggedIn && role=="ADMIN" ? (  <Layout>
                    <section className="py-12">
                        <div className="flex items-center justify-center px-5">
                            <div className="md:w-2/6 ">
                                <img src={BurgerSVG} alt="BurgerSVG" />
                            </div>
                            <div className="max-w-md md:w-4/6 mx-auto mt-8 bg-white p-4 ">
                                <h2 className="mb-4 text-2xl font-semibold">Add Product</h2>

                                <form >
                                    <div className="mb-4">
                                        <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">
                                            Product Image <span className="text-red-500 text-[12px]">(Only .jpg, .jpeg, .png, .gif Accepted)</span>
                                        </label>
                                        <input
                                        onChange={handleUserInput}
                                            type="file"
                                            accept=".jpg, .jpeg, .png, .gif"
                                            name="productImage"
                                            id="productImage"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                                            Product Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        onChange={handleUserInput}
                                            type="text"
                                            name="productName"
                                            required
                                            minLength={2}
                                            id="productName"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Product Description <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        onChange={handleUserInput}
                                            type="text"
                                            name="description"
                                            minLength={10}
                                            id="description"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Product Price <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        onChange={handleUserInput}
                                            type="number"
                                            name="price"
                                          Control the input
                                            required
                                            id="price"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                      
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                                            Product Quantity <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                        onChange={handleUserInput}
                                            type="number"
                                            name="quantity"
                                             required
                                            id="quantity"
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="category">Product Category <span className="text-red-500">*</span></label>
                                        <select
                                        onChange={handleUserInput}
                                            name="category"
                                            id="category"
                                       
                                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                         
                                        >
                                            <option value="">Select Category</option>
                                            <option value="veg">Veg</option>
                                            <option value="non-veg">Non-veg</option>
                                            <option value="drinks">Drinks</option>
                                            <option value="sides">Sides</option>
                                            <option value="food">Food</option>
                                            <option value="pizza">Pizza</option>
                                            <option value="maincourse">Main Course</option>

                                        </select>
                                    </div>

                                    <button
                                    onClick={handleFormSubmit}
                                        type="submit"
                                        className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
                                    >
                                        Add Product
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </Layout>):(<Denied/>)}
         
        </>
    )
}


export default AddProduct;
