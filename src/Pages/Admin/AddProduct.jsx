import Layout from "../../Layouts/Layout"
import BurgerSVG from "../../assets/Images/Burger.svg"


function AddProduct() {
    return (
        <Layout>
            <section className="py-12">
                <div className="flex items-center justify-center px-5">
                    <div className="md:w-2/6 ">
                    <img src={BurgerSVG} alt="BurgerSVG" />
                    </div>
                <div className="max-w-md md:w-4/6 mx-auto mt-8 bg-white p-4 ">            
                    <h2 className="mb-4 text-2xl font-semibold">Add Product</h2>

                    <form action="">

                        <div className="mb-4">
                            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image <span className="text-red-500 text-[12px]">(Only .jpg , .jpeg , .png , .gif Accepted)</span></label>
                            <input type="file" 
                            accept=".jpg , .jpeg , .png , .gif"
                            name="productImage"
                            id="productImage"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                              Product Name <span className="text-red-500">*</span>
                            </label>
                            <input type="text" 
                            name="productName" 
                            required
                            minLength={2}
                            id="productName"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
                              Product Description<span className="text-red-500">*</span>
                            </label>
                            <input type="text" 
                            name="productDescription" 
                            minLength={10}
                            id="productDescription"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                              Product Price <span className="text-red-500">*</span>
                            </label>
                            <input type="number" 
                            name="productPrice" 
                            required
                            id="productPrice"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="productQuantity" className="block text-sm font-medium text-gray-700">
                              Product Quantity <span className="text-red-500">*</span>
                            </label>
                            <input type="number" 
                            name="productQuantity" 
                            required
                            id="productQuantity"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-2">
                            <label htmlFor="productCategory">Product Category <span className="text-red-500">*</span></label>
                            <select name="productCategory" id="productCategory" className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                <option value="veg">Veg</option>
                                <option value="non-veg">Non-veg</option>
                                <option value="drinks">Drinks</option>
                                <option value="sides">Sides</option>
                                <option value="food">Food</option>
                                <option value="pizza">Pizza</option>
                            </select>
                        </div>
                        
                        <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
                        >
                            Add Product
                        </button>

                    </form>

                </div>
                </div>
               
            </section>   
        </Layout>
    )
}

export default AddProduct