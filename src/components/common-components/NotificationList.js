import CommonNotification from "./CommonNotification";


const NotificationList = ({notifications, allNotifications}) => {
        //  console.log("Notifications ?????::::", allNotifications);
          //    <CommonNotification type={"comment"} />
          //    <CommonNotification type={"like"} />
          //    <CommonNotification type={"share"} />

    return ( 
        <div className="flex-col border-b border-gray-200 w-full pb-2">
           {/* { notifications?.map((notification,idx)=>(
               <div>
                     <CommonNotification notification={notification} type={notification?.type} key={notification?.id}/>
               </div>
            ))} */}

            { allNotifications?.map((notification,idx)=>(
                        <div>
                                <CommonNotification allNotification={notification} />
                        </div>
                        ))}

       

        </div>
     );
}
 
export default NotificationList;