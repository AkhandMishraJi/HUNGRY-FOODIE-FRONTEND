import { useDispatch, useSelector } from 'react-redux'
import Pizzalogo from '../assets/Images/pizza1.png'
import Footer from '../Components/Icons/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Slices/AuthSlice'

function Layout({children}) {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    async function handleLogout(e){
        e.preventDefault()
        dispatch(logout())
    }
    // confirm(isLoggedIn)
    return (
        <div>
            <nav className="flex items-center justify-around h-16 text-[#6b7280] font-mono border-none shadow-lg">

                <div className="flex items-center justify-center"
                onClick={()=>navigate('/')}
                >
                    <p>Pizza App</p>
                    <img src={Pizzalogo} alt="Pizza Logo" />
                </div>

                <div className='hidden md:block'>
                
                <ul className="flex gap-4">

                    <li className="hover:text-[#ff9110]">
                        { '  ' }
                        <p>Menu {' '}</p>
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
                             {isLoggedIn ?
                             (<Link onClick={handleLogout}>Logout</Link>):(<Link to={"/auth/login"}>Login</Link>)}
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