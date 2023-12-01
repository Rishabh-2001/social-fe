// import { logDOM } from "@testing-library/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFriendS } from "../../features/auth/friend";
import FriendList from "./FriendList";

const FriendDropDown = () => {
    const dispatch=useDispatch()
    const friendList=useSelector(store=>{
        return store?.friend?.friendList?.friendsList;
    })
    console.log("Freind sDAta:", friendList);
    useEffect(()=>{
        const payload={
            userId: JSON.parse(localStorage.getItem('currentUser')).userId,
          }
         dispatch(getAllFriendS(payload));

    },[])


    return ( 
        <div className="flex-col bg-white mt-2 px-1 py-2.5 rounded-xl">
             <input type="text" placeholder="Search friend here..." className="outline-none px-2 mb-4 py-1 border-[#aeaeae] border text-sm rounded-xl w-full"></input>
            <div>
                <h2 className="font-semibold">Friends</h2>
                {friendList?.map((f,id)=>(
                    <FriendList friend={f} key={id} />
                ))}
               
            </div>
        </div>
     );
}
 
export default FriendDropDown;