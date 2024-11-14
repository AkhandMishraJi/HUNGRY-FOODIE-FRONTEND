import { useSelector } from "react-redux"
import { Navigate , Outlet} from "react-router-dom"

function RequireAdmin() {
    
    const role = useSelector((state) => state.auth.role)
    return role=="ADMIN"? <Outlet/> : <Navigate to='/denied'/>
}

export default RequireAdmin