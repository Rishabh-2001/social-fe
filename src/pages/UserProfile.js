
import userDp from '../assets/Avatar.svg'
import heart from '../assets/Shape.svg'

import connection from '../assets/people.svg'
import album from '../assets/images.svg'
import share from '../assets/share-social-outline.svg'
import bgProfile from '../assets/5172658.jpg'

import IntroProfile from "./IntroProfile";
import WritePost from "../components/common-components/WritePost";
import FriendCard from "../components/common-components/FriendCard";
import LikeCard from "../components/common-components/LikeCard";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../features/auth/post";
import { useEffect, useState } from "react";

import PostCard from "../components/common-components/PostCard";
// import useLocation 
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import FriendDropDown from '../components/common-components/FriendDropDown'
const UserProfile = () => {
  const location = useLocation();
  const [userId,setUserId]=useState();
  const params=useParams()
  const id=params?.userId;
  const user=JSON.parse(localStorage.getItem('currentUser'))
  const myId=user?.userId;
  const navigate=useNavigate()
  // console.log("SDFSDFSFSD:", myId, id, user);


  useEffect(()=>{
    if(id)
    {
      setUserId(id);
    }
    else{
     
      setUserId(myId)
    }
  },[id,userId,myId])
   
    const myPosts=useSelector(store=>{
      return store?.post?.userPostData?.posts
})

const userData=useSelector(store=>{
  return store?.post?.userPostData?.posts?.[0]?.User;
})
function handleEdit()
{
  navigate(`/home/profile/edit`)
}



    console.log("MY posts:", myPosts);
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getMyPosts(userId))
         .then(res=>{
        
         })
         .catch(err=>{
          console.log("ERR:",err);
         })
      
    },[userId])

   
  

    return ( 
        <div className="flex-col">
        <div className="bg-cover bg-center bg-clip-content overflow-hidden h-56">
  <img src={bgProfile} alt="img" className="" />
  <header className="absolute ml-[10vw] top-28">    
             <div className="   flex md:flex-row flex-col  mx-auto md:px-8 px-4 md:py-4 py-8 gap-4 border w-fit bg-white rounded-xl my-4  ">
          <div className="flex md:flex-row flex-col text-center items-center justify-between ">
            <img src={userDp} alt="pfp" width="100px"></img>
            <div className='md:ml-4 mb-4'>
                <h2 className='text-xl font-bold'>{userData?.firstName || user?.username } {userData?.lastName} </h2>
                <h3 className='text-lg font-medium text-[#7b7b7b]'>Designer</h3>
                <h4 className='mt-2 font-semibold text-sm'>30 Connections</h4>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 md:mt-0 mt-4 ">
              <div>
                <img src={connection} alt="pfp" width="30px" className='mx-auto mb-2'></img>
                <p className='text-[#7b7b7b] text-sm'>20 connections</p>
              </div>
              <div>
                <img src={heart} alt="pfp" width="30px" className='mx-auto mb-2'></img>
                <p className='text-[#7b7b7b] text-sm'>20 Favourites</p>
              </div>
              <div>
                <img src={album} alt="pfp" width="30px" className='mx-auto mb-2'></img>
                <p className='text-[#7b7b7b] text-sm'>{myPosts?.length} Posts</p>
              </div>
          </div>

          { !id && <p className='mx-4 rounded bg-[#673AB7] h-[40%] py-2 px-6  my-auto text-white font-semibold cursor-pointer' onClick={handleEdit} >Edit Profile</p>}
           <img src={share} alt="pfp" width="30px" className='cursor-pointer md:mx-0 mx-auto' ></img> 
           
            
        </div>
            </header>
</div>
        

            <div className="flex py-4 px-4 gap-4 mt-12">
                <aside className="w-[18%] ">
                  <IntroProfile userData={userData} />
                </aside>
                <main className="w-[58%]">
               {!id  && <WritePost /> }
                  {myPosts?.map((post,index)=>(
                    <div key={index}>
                       <PostCard post={post} CurrUserId={id} />
                    </div>
                  ))}
                </main>
               <aside className="w-[24%] flex-col">
               <FriendDropDown />
                <LikeCard />
               </aside>
            </div>
        </div>
     );
}
 
export default UserProfile;