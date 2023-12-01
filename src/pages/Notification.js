import { useEffect } from "react";
import SettingIcon from "../assets/SettingIcon";
import NotificationList from "../components/common-components/NotificationList";
import { useDispatch, useSelector } from "react-redux";
import { getMyNotifications } from "../features/auth/notifications";
// import { io } from "socket.io-client";

const Notification = ({notCount,setNotCount, notifications, socket}) => {
   // move it in global app so that notification is visible to all
   const dispatch=useDispatch();
   const user=JSON.parse(localStorage.getItem('currentUser'))
   const myId=user?.userId;

   const notificationData=useSelector(store=>{
     return store?.notifications?.data?.notificationsData;
  })
  console.log('NDDD:', notificationData);

  useEffect(()=>{
    setTimeout(() => {
        socket.emit('read-notifications',  { userId: myId }) 
    }, 3000);
    
  }, [])




//   const notificationData=


   useEffect(()=>{
    dispatch(getMyNotifications(myId))
    .then(res=>{
       
    })
    .catch(err=>{
     console.log("ERR:",err);
    })
},[])

setNotCount(0);

    return ( 
        <div className="flex gap-2 m-4">
            {/* notifications  */}
            <main className="flex-col w-[66%] p-3 bg-white rounded-xl">
                <div className="flex justify-between items-center border-b border-gray-200 p-2">
                    <div className="flex gap-3 items-center">
                      <h2>Notifications</h2>
                      <span className=" bg-blue-400 rounded-full p-2 text-sm text-white">{notificationData.length}</span>
                    </div> 
                     <SettingIcon />










                </div>

                <div className="flex justify-between items-center mt-4">
                   <NotificationList  notifications={notifications} allNotifications={notificationData} />
                </div>
            </main>

            {/* friend req */}
            <aside>
                asdsad
            </aside>
        </div>
     );
}
 
export default Notification;