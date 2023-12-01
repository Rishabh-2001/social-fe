import SearchBar from "./SearchBar";
import searchIcon from '../../assets/search-circle-outline.svg'
import user from '../../assets/Avatar.svg'
const ChatList = () => {
    return ( 
        <div className="flex-col p-2 ">
              <div className="mb-2  flex ">
                <input type="text" placeholder="Search for something here..." className="outline-none px-3 py-1 border-[#aeaeae] border text-sm rounded-xl w-full"></input>
                 <img src={searchIcon} width="25px" alt="icon"></img>
              </div>
<div>
    <p className="font-semibold">Messages: </p>
            <ul>
            <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>

                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Riya</h2>
                                <p className="text-sm text-[#717171]">go way, you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>


                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rishabh Kumar</h2>
                                <p className="text-sm text-[#717171]">ok</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>


                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Rajesh Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>

                        <li className="flex justify-between py-2 px-1.5 cursor-pointer hover:bg-[#b8dbf0]">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="40px" className='rounded-full mr-2'></img>
                                <div className="flex-col">
                                <h2 className='font-semibold text-[#444] text-2sm'>Seems Rai</h2>
                                <p className="text-sm text-[#717171]">I want to meet you ....</p>
                                </div>
                            </div>
                          
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>
              </ul>

</div>
           
        </div>
     );
}
 
export default ChatList;