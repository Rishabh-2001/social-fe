
import FriendReqCard from './FriendReqCard';
const FriendReq = ({friendReqList}) => {

    return ( 
        <div className="flex-col mt-2 bg-white px-2 py-2.5 rounded-xl ">
           <div className="flex justify-between pb-2 border-b border-gray-500">
               <h2 className=" font-bold text-sm text-[#333]">Friend Requests: </h2>
               <h4 className="text-blue-500 font-medium text-sm">See All</h4>
           </div>
           {friendReqList?.length>0 ?     <div className='max-h-[40vh] overflow-y-scroll custom-scrollbar '>
             {friendReqList?.map(friend=>(
                 <FriendReqCard friend={friend} />
           ))}
           </div> : <div className='p-2 text-center'> No Request yet !</div> }
                
        </div>
     );
}
 
export default FriendReq;