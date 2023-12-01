import { Link } from "react-router-dom";
import people from '../../assets/people-outline.svg'
import notification from '../../assets/notifications-outline.svg'
import chat from '../../assets/chatbubbles-outline.svg'
import globe from '../../assets/globe-outline.svg'
import user from '../../assets/person-circle-outline.svg'
import settings from '../../assets/settings-outline.svg'
import logout from '../../assets/log-out-outline.svg'
import feed from '../../assets/happy-outline.svg'

const Aside = ({notCount}) => {
    return ( 
        <div className="flex-col px-2 py-1 justify-between  top-20 relative ">
            <ul className="">
                <li className="pl-2 gap-2 flex py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={feed} width="20px" alt="icon"></img>
                    <Link to="" >Feed</Link>
                    </li>
                <li className="pl-2 gap-2 py-2 flex font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                    <img src={people} width="20px" alt="icon"></img>
                    <Link  to="community">My Community</Link></li>
                <li className="pl-2 flex gap-2 py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={chat} width="20px" alt="icon"></img>
                    <Link to="messages">Messages</Link></li>
                <li className="pl-2 flex gap-2 py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={notification} width="20px" alt="icon"></img>
                    <Link to="notifications">{notCount>0  ?  <span
      className={" bg-red-500 h-3 w-3 rounded-full inline-block mr-1"}
    ></span>
:""} Notification</Link></li>
                <li className="pl-2 flex gap-2 py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={globe} width="20px" alt="icon"></img>
                    <Link to="explore">Explore</Link></li>
                <li className="pl-2 flex gap-2 py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={user} width="20px" alt="icon"></img>
                    <Link to="profile">Profile</Link></li>
                <li className="pl-2 flex gap-2 py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={settings} width="20px" alt="icon"></img>
                    <Link to="settings">Settings</Link></li>
                <li className="pl-2 flex gap-2 py-2 font-semibold text-[#333] text-2sm hover:bg-[#6743AB] rounded-xl hover:text-white">
                <img src={logout} width="20px" alt="icon"></img>
                    <Link to="logout">Logout</Link></li>




            </ul>

        

        </div>
     );
}
 
export default Aside;