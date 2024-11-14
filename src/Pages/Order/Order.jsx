import { useNavigate } from "react-router-dom"
import Layout from "../../Layouts/Layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { placeOrder } from "../../Redux/Slices/OrderSlice"

function Order() {
    const navigate = useNavigate()
   const dispatch = useDispatch()
   const { cartsData } = useSelector((state) => state.cart);
   const [details, setDetails] = useState({
    paymentMethod:null,
    address:null
   });
   
    

        function handleUserInput(e) {
            const { name, value } = e.target;
            setDetails({
                ...details,
                [name]: value
            });
            console.log("DETAILS STATE",details);
            
        }
    
    async function handleFormSubmit(e) {
            e.preventDefault()
            if (details.paymentMethod==null || details.address==null) {
                toast.error("Missing Form Values")
            }
        console.log("Cart Details: ", details);
            
            const response = await dispatch(placeOrder(details))
            console.log("Order Response: ",response);
            if (response?.payload?.data?.success) {
                toast.success("Successfully Placed The Order")
                navigate('/order/success')
            }
        }
    useEffect(()=>{
        console.log(cartsData);
    })
    return (
        <Layout>
            <div className="min-h-[75vh] pt-20">
            <section className="text-gray-600 body-font min-h-[75vh]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Order Details</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Total Price
                        <span className="font-bold text-red-900">                        ₹
                        {cartsData?.items?.length === 0
                          ? ''
                          : cartsData?.items?.reduce((acc, item) => acc + item?.quantity*item?.product?.price , 0) }</span>
                        </p>
                    </div>
                    <form action="" className="flex flex-col justify-center">
                        <div className="relative flex-grow ">
                            <label htmlFor="paymentMethod" className="leading-7 text-lg text-gray-500">Payment Method </label>
                            <select required name="paymentMethod" id="paymentMethod" className="p-2 border rounded-lg focus:outline-none" onChange={handleUserInput}><option value="ONLINE">Online</option><option value="CASH">Cash</option>                                
                            </select>
                        </div>
                        <div className="relative flex-grow w-full">
                            <label htmlFor="address">Address</label>
                            <textarea  id="address" name="address" onChange={handleUserInput} required className="px-2 border rounded-lg focus:outline-none mt-2 w-full h-20"/>
                        </div>
                        <button type="submit" onClick={handleFormSubmit} className="mt-5 bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
                                    >Place Order</button>
                    </form>
                </div>
            </section>
            </div>
        </Layout>
    )
}

export default Order