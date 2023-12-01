import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BirthdayCard from "../components/common-components/BirthdayCard";
import FriendDropDown from "../components/common-components/FriendDropDown";
import LikeCard from "../components/common-components/LikeCard";
import PostCard from "../components/common-components/PostCard";
import WritePost from "../components/common-components/WritePost";
import {  getAllPosts } from "../features/auth/post";
import { getAllFriendReq } from "../features/auth/friend";
import FriendCard from "../components/common-components/FriendCard";
import FriendReq from "../components/common-components/FriendReq";

const Feed = () => {
     const dispatch=useDispatch()
   
     const postData=useSelector(store=>{
      console.log("STORE:",store);
       const {post}=store;
       return post?.postData
     })

     const friendReqList=useSelector(store=>{
        return store.friend.friendList.friends;
     })
     console.log("FFFDFDDFDFD;", friendReqList);
     


     useEffect(()=>{
       const payload={
         userId: JSON.parse(localStorage.getItem('currentUser')).userId,
        }
         dispatch(getAllPosts());
         dispatch(getAllFriendReq(payload));
     },[])

   
          

 
     

      
    return ( 
        <div className="flex justify-around ml-2 ">
            <div className=" flex-col w-[57%]   ">
                <WritePost/>
            {postData?.posts?.map((post,index)=>(
                   <PostCard post={post} key={index}/>
             ))}
               
            
                
               
            </div>
            <div className=" flex-col w-[22%] ">
              <LikeCard />
              <BirthdayCard />
              <FriendReq friendReqList={friendReqList} />
            </div>
            <div className=" flex-col w-[19%]">
              <FriendDropDown />
            </div>

        </div>
     );
}
 
export default Feed;