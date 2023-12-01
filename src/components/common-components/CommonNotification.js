import CommentIcon from "../../assets/CommentIcon";
import ShareIcon from "../../assets/ShareIcon";
import Heart from "../../assets/heart";
import getTimeDifference from "../../utils/getTimeDiff";

const CommonNotification = ({type,notification,allNotification}) => {
    console.log("F>>>", allNotification);
     

    return ( 
        
        <div className={`flex-col border-b border-gray-200 mb-2 pb-1 ${allNotification?.notificationData?.is_read===true ?"": "bg-[#eeeef2]"} px-3 py-1 rounded-xl `}>
            <div className="flex gap-2 items-center">
                { allNotification?.notificationData?.type==="like"? (  <Heart color={"red"} />) : allNotification?.notificationData?.type==="comment" ? ( <CommentIcon color={"aqua"} /> ):allNotification?.notificationData?.type==="share" ? (  <ShareIcon color={""} /> ):"" }
                <span className="text-sm">{allNotification?.userWhoCreatedDet?.userWhoSent}  {allNotification?.userWhoCreatedDet?.firstName} just {allNotification?.notificationData?.type==="like"?"liked your post.":allNotification?.notificationData?.type==="comment"?"commented your post.":allNotification?.notificationData?.type==="friend_request"?"sent you a Friend Request": "shared your post."} </span>
            </div>
            <span className="text-sm text-[#a3a2a2] font-light ml-8 mt-0">{getTimeDifference(allNotification?.notificationData?.created_at)} min ago</span>
        </div>
     );
}
 
export default CommonNotification;