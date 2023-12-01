import userDp from '../../assets/Avatar.svg'
import heart from '../../assets/Shape.svg'
import connection from '../../assets/people.svg'
import album from '../../assets/images.svg'
import { useNavigate } from 'react-router-dom'
import PersonAdd from '../../assets/PersonAdd'
const ProfileCard = ({userIdToVisit,userNameToVisit}) => {
  const navigate=useNavigate()
  function handleClick()
  {

     navigate(`profile/${userIdToVisit}` )
  }
  
    return ( 
        <div className="flex md:flex-row flex-col  mx-auto md:px-4 px-2 md:py-2 py-0 gap-2 border w-fit rounded-xl bg-white shadow-sm absolute left-10 top-0 items-center">
          <div className="flex md:flex-row flex-col text-center items-center justify-between py-2 ">
            <img src={userDp} alt="pfp" width="25px"></img>
            <div className='md:ml-2 mb-1 '>
                <h2 className='text-md font-bold'>{userNameToVisit}</h2>
                <h3 className='text-sm font-medium text-[#7b7b7b]'>Designer</h3>
                {/* <h4 className='mt-0 font-semibold text-sm'>30 Connections</h4> */}
            </div>
          </div>

          <div className="flex justify-between items-center gap-2 md:mt-0 mt-2 ">
              <div>
                <img src={connection} alt="pfp" width="25px" className='mx-auto mb-2'></img>
                <p className='text-[#7b7b7b] text-sm'>20 connections</p>
              </div>
              <div>
                <img src={heart} alt="pfp" width="25px" className='mx-auto mb-2'></img>
                <p className='text-[#7b7b7b] text-sm'>20 Favourites</p>
              </div>
              <div>
                <img src={album} alt="pfp" width="25px" className='mx-auto mb-2'></img>
                <p className='text-[#7b7b7b] text-sm'>20 Posts</p>
              </div>
          </div>

           <p className='mx-2 rounded bg-[#673AB7] h-[20%] py-1 px-3  my-auto text-white font-semibold cursor-pointer' onClick={handleClick}>See Profile</p>
           {/* <img src={add} alt="pfp" width="30px" className='cursor-pointer md:mx-0 mx-auto' onClick={handleAdd} ></img>  */}
           <PersonAdd userIdToVisit={userIdToVisit} />
           
            
        </div>
     );
}
 
export default ProfileCard;