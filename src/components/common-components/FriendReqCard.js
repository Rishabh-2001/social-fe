import { useDispatch } from 'react-redux';
import user from '../../assets/Avatar.svg'
import { getAllFriendReq, respondFriendReq } from '../../features/auth/friend';

const FriendReqCard = ({friend}) => {
    const dispatch=useDispatch();



    async function handleAccept(userWhoSentId, userWhoGotId)
    {
        const payload={
             userId: userWhoGotId,
             friendId: userWhoSentId, 
             result: "ACCEPTED"
        }
        const responseRes=await dispatch(respondFriendReq(payload));
        console.log("ACCEPTED", responseRes);

        const p={
            userId: JSON.parse(localStorage.getItem('currentUser')).userId,
          }
             dispatch(getAllFriendReq(p));
    }
  async  function handleReject(userWhoSentId, userWhoGotId)
    {
        const payload={
            userId: userWhoGotId,
            friendId: userWhoSentId, 
            result: "REJECTED"
       }
       const responseRes=await dispatch(respondFriendReq(payload));
       console.log("REJECTED", responseRes);
    }
    return ( 
        <div>
                <div className='flex my-2  '>
                    <img src={user} alt="user" width="40px" className='rounded-full mr-4'></img>
                    <div className='flex-col items-center'>
                        <h2 className='font-semibold text-[#444] text-2sm'>{friend?.userWhoSentData?.firstName} {friend?.userWhoSentData?.lastName} </h2>
                        <h3 className='font-200 text-[#bbbaba] text-sm'>Founder at Trivea</h3>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <button className='bg-[#ebeaea] text-[#868484] font-semibold px-3 py-1.5 rounded'  onClick={()=>handleReject(friend?.userWhoSentData?.id, friend?.friendReqData?.friendId)} >Decline</button>
                    <button className='bg-blue-500 text-white font-semibold px-3 py-1.5 rounded' onClick={()=>handleAccept(friend?.userWhoSentData?.id, friend?.friendReqData?.friendId)} >Accept</button>
                </div>
        </div>
     );
}
 
export default FriendReqCard;