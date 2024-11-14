import { useNavigate } from "react-router-dom"
import Layout from "../../Layouts/Layout"

function OrderSuccess() {
    const navigate = useNavigate()
return(
    <Layout>
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-amber-50
    to-orange-300">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmation-illustration-download-in-svg-png-gif-file-formats--verification-done-delivery-shopping-confirmed-lifestyle-pack-people-illustrations-4500195.png" alt="Order Success" className=" tracking-widest text-white text-9xl"/>
        <div className="absolute px-2 text-xl text-white bg-black rounded rotate-12">Order Successfuly Placed</div>
        <button onClick={() => navigate('/')} className="mt-5">
            <a className="relative inline-block text-sm font-medium text-[#fff] group active:text-yellow-500
            focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#eab308] group-hover:translate-y-0 group-hover:translate-x-0"/>
                <span 
                className="relative block px-8 py-3 bg-[#eab308] border border-current">
                   Shop More...
                </span>
            </a>
        </button>
    </main>
    </Layout>
)    

}

export default OrderSuccess