
import iconlogo from '../assets/iconlogo.svg'
const Logoname = () => {
    return ( 
        <div className='flex items-center '>
        
        <img src={iconlogo} alt='logo' />
        <h2 className="font-[Monoton] text-[#673AB7] italic flex-wrap-none md:text-2xl text-xl  "> Globl</h2>
        
    </div>
     );
}
 
export default Logoname;