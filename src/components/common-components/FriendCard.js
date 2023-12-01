import user from '../../assets/Avatar.svg'
const FriendCard = () => {
    return ( 
         <div className="flex-col bg-white px-1 py-2.5 rounded-xl">
             <input type="text" placeholder="Search friend here..." className="outline-none px-2 mb-4 py-1 border-[#aeaeae] border text-sm rounded-xl w-full"></input>
            <div>
                <span className="font-semibold">Friends</span>
                <span className="font-medium text-sm text-[#6e6ef3] float-right">See All</span>
                 <ul>
                    <li className="flex justify-between py-2 px-1.5">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                                <h2 className='font-medium text-[#444] text-sm'>Rajesh Rai</h2>
                            </div>
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between  py-2 px-1.5">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                                <h2 className='font-medium text-[#444] text-sm'>Rajesh Rai</h2>
                            </div>
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between  py-2 px-1.5">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                                <h2 className='font-medium text-[#444] text-sm'>Rajesh Rai</h2>
                            </div>
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between  py-2 px-1.5">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                                <h2 className='font-medium text-[#444] text-sm'>Rajesh Rai</h2>
                            </div>
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>

                 </ul>
            </div>
        </div>
     );
}
 
export default FriendCard;