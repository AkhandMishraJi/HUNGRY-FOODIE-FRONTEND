import { useSelector } from "react-redux"
import { Navigate , Outlet} from "react-router-dom"

function RequireAuth() {
    
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    return isLoggedIn==true? <Outlet/> : <Navigate to='/auth/login'/>
}

export default RequireAuth