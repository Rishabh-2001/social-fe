
import loginpic from '../../assets/loginpic.svg'
import {  useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/user'
const BASE_URL=process.env.REACT_APP_BASE_URL;
const Login = () => {
     const [formData,setFormData]=useState({
        email:'',
        password:''
     })
    //  const [token,setToken]=useState('')
     const navigate=useNavigate()
     const dispatch=useDispatch()


     const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
     }

     const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("...");
        await axios.post(`${BASE_URL}/auth/login`, formData)
        .then(resp=>{
              
              toast.success("Successfuly, logged in...")
              const data={
                username:resp?.data?.firstName,
                userId: resp?.data?.id,
                isAuthenticated:true
                  }

      
            
            dispatch(setUser(data))
            localStorage.setItem('currentUser',JSON.stringify(data));
            dispatch(setUser(data))
            navigate('/home')
        })
        .catch(err=>{
            toast.error(err.response.data.error);
        })



     }
  

    
    return ( 
        <>
           {/* <div id='navbar' className=' py-4  flex justify-between px-4 items-center bg-white  top-[0%] z-10 border-b-2'>
            
      
            <HashLink  smooth  to="/#" > <Logoname />   </HashLink> 
         
         
      
          
          
          
         

            <ul className='flex justify-around items-center font-sans font-semibold gap-[1vw]  '>
                <li className='border md:px-6 px-3 md:py-2.5 py-1.5 rounded-full bg-[#673AB7] text-white cursor-pointer'>
                    <Link to='/auth/login' >Login</Link>
                    </li>
                <li className='border  md:px-6 px-3 md:py-2.5 py-1.5  rounded-full bg-[#673AB7] text-white cursor-pointer'>
                <Link to='/auth/register' >Register</Link>
                    </li>
            </ul>
      
         
         </div> */}
        
        <div className="flex items-center justify-center ">
            <div className="flex md:flex-row flex-col  md:w-[60%] w-[90%]  mx-auto justify-between ">

                <div className="flex-col md:w-[60%] w-[90%] rounded border-2 border-[#673AB7]  text-center py-4">
                    <h2  className='md:text-2xl text-xl font-bold my-4 mx-auto text-[#673AB7]'>Login To Your Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='flex-col mt-14 text-left'>
                            <div className='px-8 mb-6'>
                                <label htmlFor='email'  className=' labels mb-2'>Enter Email</label>
                                <br></br>
                                <input type='email' name="email" id='email' value={formData.email} onChange={handleChange} className='border w-full py-2 outline-none  p-2' />
                            </div>
                        <div className='px-8 mb-6'>
                                <label htmlFor='password' className=  'labelsmb-2'>Enter Password</label>
                                <br></br>
                                <input type='password' name="password" id='password' value={formData.password} onChange={handleChange} className='border w-full py-2 outline-none p-2' /> 
                            </div>
                            <div className='px-8 mb-6'>
                            <input type='checkbox' value="" defaultChecked name='remember' />
                            <label className='ml-4'>Remember</label>
                            <span className='float-right font-medium text-[#673AB7]'>Forgot Password ?</span>
                            <br></br>
                            <button type='submit' className='text-white bg-[#673AB7] w-full py-2 mt-16  rounded-xl' >Login</button>
                            </div>

                        
                        
                        
                        </div>
                    </form>

                 
                </div>
                <div className="flex-col md:w-[35%] w-[90%] md:mt-0 mt-14 text-center justify-center ">

                    <h2 className="font-bold text-[#311B92] text-3xl mb-4 font-sans ">To address all issues Lorem Ipsum</h2>
                    <p>I am a software engineer and a lifelong learner. I firmly believe that good software.</p>
                    <img src={loginpic} className='w-8/12 md:w-2/5 h-auto  mt-12 mx-auto' alt='loginpic'></img>
                </div>
            </div>
       
        </div>
        </>
     );
}
 
export default Login;