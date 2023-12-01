import Logoname from "./Logoname";
import facebook from '../assets/logo-facebook.svg'
import google from '../assets/logo-google.svg'
import instagram from '../assets/logo-instagram.svg'
import reddit from '../assets/logo-reddit.svg'


const Footer = () => {
    return ( 
        <>
        <div className=" md:flex flex flex-wrap justify-around px-4 py-8 gap-4  mt-12   ">
            <div className="flex flex-col md:w-[30%] w-[80%] mx-auto   ">
                <Logoname />

                <p className="text-[#444] mt-4 mb-8">After the logo, let’s add another SVG for a hamburger icon.</p>
                <span> &copy; Socio-me Inc. 2023</span>
            </div>
            <div className="md:w-[15%] w-[40%] mx-auto">
                <h2 className="font-bold  text-xl text-[#673AB7]">Company</h2>
                <ul className="text-style-none text-[#444] mt-4">
                    <li className="mb-4">sub heading 1</li>
                    <li className="mb-4">sub heading 2</li>
                    <li className="mb-4">sub heading 3</li>
                    <li className="mb-4">sub heading 4</li>
                </ul>

            </div>
            <div className="md:w-[15%] w-[40%] mx-auto">
                <h2 className="font-bold  text-xl text-[#673AB7]">Services</h2>
                <ul className="text-style-none text-[#444] mt-4">
                    <li className="mb-4">sub heading 1</li>
                    <li className="mb-4">sub heading 2</li>
                    <li className="mb-4">sub heading 3</li>
                    <li className="mb-4">sub heading 4</li>
                </ul>

            </div>
            <div className="md:w-[15%] w-[40%] mx-auto">
                <h2 className="font-bold  text-xl text-[#673AB7]">Resources</h2>
                <ul className="text-style-none text-[#444] mt-4">
                    <li className="mb-4">sub heading 1</li>
                    <li className="mb-4">sub heading 2</li>
                    <li className="mb-4">sub heading 3</li>
                    <li className="mb-4">sub heading 4</li>
                </ul>

            </div>
            <div className="md:w-[20%] w-[40%] mx-auto flex">
                  <img src={facebook} alt="logo" width="30px" className="mr-2 cursor-pointer"></img>
                  <img src={google} alt="logo" width="30px" className="mr-2 cursor-pointer"></img>
                  <img src={reddit} alt="logo" width="30px" className="mr-2 cursor-pointer"></img>
                  <img src={instagram} alt="logo" width="30px" className="mr-2 cursor-pointer"></img>
            </div>
        </div>
        </>
     );
}
 
export default Footer;