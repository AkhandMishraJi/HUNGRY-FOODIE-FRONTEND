import { useDispatch, useSelector } from 'react-redux'
import Pizzalogo from '../assets/Images/pizza1.png'
import Footer from '../Components/Icons/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'
import cartImage from '../assets/Images/cart.svg'
import { useEffect } from 'react'
import { getCartDetails } from '../Redux/Slices/CartSlice'
import toast from 'react-hot-toast'
function Layout({children}) {

    const navigate = useNavigate()
    function navigateToAllProducts() {
        navigate('/products')
    }
    const role = useSelector((state) => state.auth.role)

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    async function handleLogout(e){
        e.preventDefault()
        dispatch(logout())
        navigate('/auth/login')
    }
    // confirm(isLoggedIn)
    useEffect(()=>{
        if (isLoggedIn==true) {
            dispatch(getCartDetails())            
        }else{
            toast.success("Please Login For Better Experience")
        }
    },[])
    return (
        <div>
            <nav className="flex items-center justify-around h-16 text-[#6b7280] font-mono border-none shadow-lg fixed top-0 bg-white w-full
">

                <div className="flex items-center justify-center"
                onClick={()=>navigate('/')}
                >
                    <p>Pizza App</p>
                    <img src={Pizzalogo} alt="Pizza Logo" className="animate-spin-slow"/>
                </div>

                <div className='hidden md:block'>
                
                <ul className="flex gap-4">

                    <li className="hover:text-[#ff9110]">
                        { '  ' }
                        <p onClick={navigateToAllProducts}>Menu {' '}</p>
                    </li>
                    <li className="hover:text-[#ff9110]">
                        { '  ' }
                        <p>Services {' '}</p>
                    </li>
                    <li className="hover:text-[#ff9110]">
                        { '  ' }
                        <p>About {' '}</p>
                    </li>

                </ul>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li className="hover:text-[#ff9110]">
                             {isLoggedIn==true?
                             (<Link onClick={handleLogout}>Logout</Link>):(<Link to={"/auth/login"}>Login</Link>)}
                             </li>
                             {isLoggedIn &&(
                                <Link to={'/cart'}><li className='inline'><img src={cartImage} alt="Cart" className='inline animate-cart'/></li></Link>
                             )}
                             <li className="hover:text-[#ff9110]">
                                {isLoggedIn && role=='ADMIN' ? (<Link to={'/admin/addproduct/'}>Add Product</Link>):(<></>)}
                             </li>
                    </ul>
                </div>


            </nav>
            {children  }
            <Footer/>
        </div>
        )
}

export default Layout