import { useNavigate, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
    let error = useRouteError()
    const navigate = useNavigate()
    console.log(error)

    return ( 
       <div>
           <h2 className="text-center text-2xl font-bold">Some Error!</h2>

           <button onClick={()=>navigate('/')}>Go Back Home</button>
       </div>
     );
}
 
export default ErrorBoundary;