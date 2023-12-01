
import { useLocation,Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  
    const location =useLocation()
    const user=localStorage.getItem('currentUser');

        if(!user) {
            return <Navigate to="/" state={{ from: location}} replace />
        }
     return children
    
}
 
export default ProtectedRoute;