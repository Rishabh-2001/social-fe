import { Route, createBrowserRouter, createRoutesFromElements, redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/Home";
import Cookies from 'js-cookies'
import ErrorBoundary from "../components/common-components/ErrorBoundary";
import PostCard from "../components/common-components/PostCard";
import Login from "../components/auth/Login";
import Home from "../components/Home";



export const routes=createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
            path="/"
            element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            }
            errorElement={<ErrorBoundary />}
            >
             <Route 
               index path="home"
               element={
                 <HomePage />
               } />
               <Route exact path="mypost" element={<PostCard />}   />
                </Route>
            <Route 
               path="auth"
               element={<Login />}
               loader={()=>{
                 if(Cookies.get("token")){
                    return redirect("/")
                 }
                 return null;
               }}
               errorElement={<ErrorBoundary />}
               >
                    <Route path="" loader={() => redirect("auth/login")} />
                    <Route path="login" element={<Login />} />

               </Route>

               <Route path="*" loader={() => redirect("login")} />




           </>,
    ),
)