import axios from 'axios'
import { HashLink } from 'react-router-hash-link'
import { useRef } from 'react'
import Logoname from '../Logoname'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
const BASE_URL=process.env.REACT_APP_BASE_URL;

const Verify = () => {
    const dispatch=useDispatch();
    const inputElement = useRef();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate=useNavigate()
  
    const email = params.get('q'); 

 



     const handleSubmit=async (e)=>{
        e.preventDefault();
        const otp=inputElement.current.value;
        const payload={
            email:email,
            otp:otp
        }
        await axios.post(`${BASE_URL}/auth/verify`,payload).then(resp=>{
            toast.success(resp.data.message);
            navigate('/login');
        })
        .catch(err=>{
             const resendBtn=document.querySelector('.resend-btn')
             resendBtn.classList.remove('hidden');
             toast.error(err?.response?.data?.error)
             
           
        })

        

        
        
     }
  async function resendOTP(){
    const payload={
        email:email
    }
    await axios.post(`${BASE_URL}/auth/resendOTP`,payload)
    .then(res=>{
     
        toast.success(res?.data?.message)
        const resendBtn=document.querySelector('.resend-btn')
        resendBtn.classList.add('hidden');
    })
    .catch(err=>{
        console.log("RESEND ERR:",err);
        toast.error(err?.response?.data?.error);

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
   <div className="flex items-center justify-center   ">
            <div className="flex md:flex-row flex-col  md:w-[60%] w-[90%]  mx-auto justify-between  ">
                <div className="flex-col md:w-[60%] w-[90%] rounded border-2 border-[#673AB7]  text-center py-4 mx-auto">
                 
                     
                            <h2  className=' md:text-2xl text-xl font-bold mx-auto text-[#673AB7]'>Verify Your Account</h2>
                            <div className='flex-col  text-left mt-8'>
                            <p className='text-[grey] px-6 text-sm'>Verification code as been sent on your email {email}</p>
                             
                               <div className='px-8 mb-6 mt-4'>
                                    <label htmlFor='firstName' className=' labels mb-2'>Enter Verification Code</label>
                                    <br></br>
                                    <input type='text' name="otp" id='otp' ref={inputElement}  className='border w-full py-2 outline-none  p-2' />
                                </div>

                                 <p className='text-[grey] text-sm font-bold cursor-pointer float-right px-8 hidden resend-btn ' onClick={resendOTP}>Resend Code</p>
                                <div className='px-8 mb-6'>
                                    <button className='text-white bg-[#673AB7] w-full py-2 mt-4  rounded-xl' onClick={handleSubmit} >Verify</button>
                                </div>    
                        </div>
            
                </div>
              
            </div>
       
 </div>
 </>
      
     );
}
 
export default Verify;