import globe from '../assets/globe-outline.svg'
import user from '../assets/person-circle-outline.svg'
import insta from '../assets/logo-instagram.svg'
import fb from '../assets/logo-facebook.svg'
import twitter from '../assets/logo-twitter.svg'

import location from '../assets/location-outline.svg'
import bday from '../assets/gift-outline.svg'
const IntroProfile = ({userData}) => {
    return ( 
        <div className="flex-col px-4 py-4 rounded-xl bg-white">
            <h2 className="font-bold text-xl text-[#555] mb-4">INTRO</h2>
            <ul className="list-none ml-2 mb-2">
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={globe} width="20px" alt="icon"></img>
                   <span>uihat.com</span>
                </li>
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={user} width="20px" alt="icon"></img>
                   <span>{userData?.gender}</span>
                </li>
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={bday} width="20px" alt="icon"></img>
                   <span>{userData?.birthday}</span>
                </li>
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={location} width="20px" alt="icon"></img>
                   <span>{userData?.location}</span>
                </li>  
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={fb} width="20px"  alt="icon"></img>
                   <span>Facebook</span>
                </li>
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={twitter} width="20px"  alt="icon"></img>
                   <span>Twitter</span>
                </li>
                <li className="flex py-2 font-semibold text-[#555] gap-2 text-sm">
                    <img src={insta} width="20px"  alt="icon"></img>
                   <span>Instagram</span>
                </li>
            </ul>
            <p   className="text-[#555] font-semibold" >
                53 Followers
            </p>
            <p className="text-[#555] font-semibold" >
                53 Following
            </p>
        </div>
     );
}
 
export default IntroProfile;