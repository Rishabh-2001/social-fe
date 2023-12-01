
import user from '../../assets/Avatar.svg'
import pic1 from '../../assets/image 1.png'
import like from '../../assets/heart-outline.svg'
import comment from '../../assets/chatbox-outline.svg'
import share from '../../assets/share-social-outline.svg'
import send from '../../assets/send-outline.svg'
import getTimeDifference from '../../utils/getTimeDiff'
import { useDispatch } from 'react-redux'
import Heart from '../../assets/heart'
import { getAllPosts, getMyPosts, toComment, toLike } from '../../features/auth/post'
import { toast } from 'react-toastify'
import { useRef } from 'react'
import { useState } from 'react'
import ProfileCard from './profileCard'
import { debounce } from 'lodash'

const PostCard = ({post, CurrUserId}) => {
   

    const dispatch=useDispatch();
    const commentRef = useRef(null);
    const [isOpenComment,setOpenComment]=useState(false);
    const [display,setDisplay]=useState("hidden");
    const currUser=JSON.parse(localStorage.getItem('currentUser'))
    const[toShowOnHover,setToShowOnHover]=useState(false);
 
    console.log("SDFSDDS:", CurrUserId);
    const userId=currUser?.userId;



 

 
    const userLogged=  JSON.parse(localStorage.getItem('currentUser'))
    async function handleLike(id){
        if(isLikedByMe())
        {
            const payload={
                toDislike:true,
                postId:id,
                userId:userLogged?.userId
            }
          
            const res=await dispatch(toLike(payload));
            if(res?.payload)
            {
        
              if(CurrUserId)
              {
                dispatch(getMyPosts(CurrUserId)); 
              }
              else{
                dispatch(getMyPosts(userId)); 
                dispatch(getAllPosts());
              }
            }
            else{
              toast.error("Some error");
            }
        }
        else{
           let toDislike=false;
           const payload={
            toDislike:false,
            postId:id,
            userId:userLogged?.userId
        }
      
          const res=await dispatch(toLike(payload));
          if(res?.payload)
          {
            console.log("RES after api else:",res);
            if(CurrUserId)
            {
              dispatch(getMyPosts(CurrUserId)); 
            }
            else{
              dispatch(getMyPosts(userId)); 
              dispatch(getAllPosts());
            }
          }
          else{
          
            toast.error("Some error");
          }
        


        }

        // isLikedByMe()
    }
    async function handleComment(id)
    {
        const commentBody=commentRef.current.value ;
        if(commentBody)
        {
          const payload={
            postId:id,
            userId:userLogged?.userId,
            body:commentBody
          }

          const res=await dispatch(toComment(payload));
          if(res?.payload)
          {
            // console.log("RES after api else:",res);
            commentRef.current.value="";
            if(CurrUserId)
            {
              dispatch(getMyPosts(CurrUserId)); 
            }
            else{
              dispatch(getMyPosts(userId)); 
              dispatch(getAllPosts());
            }
          }
          else{
          
            toast.error("Some error");
          }
        }
        
    }
    function handleOpenComment(){
       console.log("GEREe", isOpenComment);
       if(isOpenComment===true)
       {
        setOpenComment(!isOpenComment)
        setDisplay("hidden")
       }
       else{
        setOpenComment(!isOpenComment)
        setDisplay("block")
       }
     

        
    }
   

      function isLikedByMe(){
        return post?.likes.some((like) => like.UserId === userLogged.userId)
    }
    const handleHover = debounce((hoveringOn) => {
      
      if (!toShowOnHover ) {
         if(!CurrUserId)
         {
          if(userId!==hoveringOn)
          {
            setToShowOnHover(true)
          }
          else{
            setToShowOnHover(false)
          }
         }
        
        
      }
    }, 500); // Adjust the debounce delay (in milliseconds) as needed
  
    const handleMove = debounce(() => {
      console.log("moving away");
      if (toShowOnHover) {
        setToShowOnHover(false);
      }
    }, 500);

    return ( 
      <div className='relative' onMouseLeave={handleMove}>
  {toShowOnHover &&    <ProfileCard userIdToVisit={post?.UserId} userNameToVisit={post?.User?.firstName}  />}
        <div className="flex-col px-2 py-1  border rounded-xl bg-white mb-8">
         
            <div className="flex justify-between mb-8">
                <div className='flex'  >
                    <img src={user} alt="user" width="40px" className='rounded-full mr-4' onMouseOver={()=>handleHover(post?.User?.id)} ></img>
                    <div>
                        <h2 className='font-bold text-[#444]'>{post?.User?.firstName}</h2>
                        <h3 className='font-semibold text-[#bbbaba]'>{getTimeDifference(post?.createdAt)}</h3>
                    </div>
                </div>
                <p>...</p>
            </div>
            <div className='flex flex-wrap mb-2 '>
               
            </div> 
            
            <p className='mb-4'>{post?.body}</p>
        {post?.image!=="0"?  <img src={post?.image}  alt='feed-im' />:"" }
            <div className='flex justify-around gap-2 items-center mb-4'>
                <p className='font-semibold text-lg text-[grey]'>{post?.numLikes} Likes</p>
                <p className='font-semibold text-lg text-[grey]'>{post?.comments?.length} Comments</p>
                <p className='font-semibold text-lg text-[grey]'>0 Shares</p>
            </div>
              <div className='border'></div>

            <div className='flex justify-around items-center mt-3'>
                <div className='flex cursor-pointer' onClick={()=>handleLike(post?.id)}>
                    {/* <img src={post?.image} alt='like' width="30px" className={`mr-2 cursor-pointer  ${isLikedByMe===true?"bg-red-600":"bg-white"}`} ></img> */}
                    <Heart color={isLikedByMe()===true?"red":"white"} postId={post?.id} />
                    <p className='text-[#444]'>Like</p>
                </div>
                <div className='flex cursor-pointer' onClick={handleOpenComment} >
                    <img src={comment} alt='comment' width="30px" className='mr-2 cursor-pointer'></img>
                    <p className='text-[#444]'>Comment</p>
                </div>
                <div className='flex'>
                    <img src={share} alt='share' width="30px" className='mr-2 cursor-pointer'></img>
                    <p className='text-[#444]'>Share</p>
                </div>
            </div>
            <div>
                
             <div className="flex items-center mb-2">
                <img src={user} alt="user" width="30px" className='rounded-full mr-2'></img>
                <textarea placeholder="Wanna comment something !" className="px-3 py-2 border m-2 w-full rounded-xl bg-slate-100" ref={commentRef}></textarea>
                <img src={send} alt="send" width="30px" className='rounded-full ml-2' onClick={()=>handleComment(post?.id)}></img>
               </div>

              { post?.comments?.map((comment,index)=>(
                <div className={`flex-col items-center mb-1 px-6 ${display} `} key={index}>
                    <div className='flex justify-between'> 
                        <div className='flex'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <p className='text-sm font-semibold'>{comment?.User?.firstName}</p>
                        </div>
                       
                         <span className='text-sm text-[#838383] '>{getTimeDifference(comment?.createdAt)}</span>
                    </div>
                      
                        <span className="pl-7 py-1 text-sm text-[#444]  w-full rounded" >{comment?.body} </span>
                       
               </div>
               ))}
            </div>


        </div>
        </div>
     );
}
 
export default PostCard;