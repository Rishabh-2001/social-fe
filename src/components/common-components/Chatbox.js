import user from '../../assets/Avatar.svg'
import voice from '../../assets/call-outline.svg'
import video from '../../assets/videocam-outline.svg'
import threedot from '../../assets/ellipsis-vertical-circle-outline.svg'
import arrow from '../../assets/arrow-back-outline.svg'
import send from '../../assets/send-outline.svg'
import emoji from '../../assets/happy-outline.svg'
import attach from '../../assets/attach-outline.svg'
const Chatbox = () => {
    return ( 
        <div className="px-1 py-1 h-screen">
           {/* <ChatNav /> */}
           <div className="flex justify-between rounded  px-2 shadow-md bg-white w-full  ">
              <div className="flex ">
              <img src={arrow} width="20px" className='mr-2' alt='dp'></img>
                <img src={user} width="35px" alt='dp'></img>
                <div className='flex-col ml-4'>
                    <h2 className='font-semibold text-lg'>Rajesh Rai</h2>
                    <span className='text-sm'>online</span>
                </div>
              </div>

              <div className='flex gap-4'>
              <img src={voice} width="30px" alt='dp'></img>
              <img src={video} width="30px" alt='dp'></img>
              <img src={threedot} width="30px" alt='dp'></img>
              </div>
           </div>

           <div className='flex-col h-[65vh] overflow-y-scroll scroll-container '>
                {/* messages box  */}
                <div>
                   <ul>
                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1  max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                        <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>

                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                            <span className='text-[10px] text-[#838383] ml-1  '>18:44</span>

                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>


                     <li className='my-1 max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                              <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                           </div>
                     </div>        
                     </li>

                     {/* <li className='my-1 float-right max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              
                              <span className='text-[10px] text-[#838383] mr-1  '>18:44</span>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                              <img src={user} alt="user" width="20px" className='rounded-full ml-2'></img>
                           </div>
                     </div>   
                     </li> */}
                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1  max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                           <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>

                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                              <span className='text-[10px] text-[#838383] ml-1  '>18:44</span>

                           </div>
                     </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                     </li>


                     <li className='my-1 max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                              <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                           </div>
                     </div>        
                     </li>

                     {/* <li className='my-1 float-right max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              
                              <span className='text-[10px] text-[#838383] mr-1  '>18:44</span>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                              <img src={user} alt="user" width="20px" className='rounded-full ml-2'></img>
                           </div>
                     </div>   
                     </li> */}
                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1  max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                        <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>

                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                            <span className='text-[10px] text-[#838383] ml-1  '>18:44</span>

                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>


                     <li className='my-1 max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                              <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                           </div>
                     </div>        
                     </li>
{/* 
                     <li className='my-1 float-right max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              
                              <span className='text-[10px] text-[#838383] mr-1  '>18:44</span>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                              <img src={user} alt="user" width="20px" className='rounded-full ml-2'></img>
                           </div>
                     </div>   
                     </li> */}
                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1  max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                        <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>

                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                            <span className='text-[10px] text-[#838383] ml-1  '>18:44</span>

                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>


                     <li className='my-1 max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                              <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                           </div>
                     </div>        
                     </li>
{/* 
                     <li className='my-1 float-right max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              
                              <span className='text-[10px] text-[#838383] mr-1  '>18:44</span>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                              <img src={user} alt="user" width="20px" className='rounded-full ml-2'></img>
                           </div>
                     </div>   
                     </li> */}
                     <li className='my-1 max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                            <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                             <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>

                     <li className='my-1  max-w-[80%]'>
                     <div className='flex justify-between'> 
                        <div className='flex items-center'>
                        <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>

                            <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                            <span className='text-[10px] text-[#838383] ml-1  '>18:44</span>

                        </div>
                    </div>
                        {/* <span className="pl-7 mb-2 mt-0 text-[12px] text-[#444]  w-full rounded" >Rahul </span> */}
                      
                        
                     </li>


                     <li className='my-1 max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd  </span>
                              <span className='text-[10px] text-[#838383] ml-1 '>18:44</span>
                           </div>
                     </div>        
                     </li>

                     <li className='my-1 float-right max-w-[80%]'>
                        <div className='flex justify-between'> 
                           <div className='flex items-center'>
                              
                              <span className='text-[10px] text-[#838383] mr-1  '>18:44</span>
                              <span className=" py-1 text-sm text-[#444]  w-full rounded-xl px-2 mt-2 bg-[#c7e1f1]" >sdfsdfsd sdf sdfsd sdsdfsds.s df sd fsdsdfsdfsd.sd sdfsd. sdfsdfsd sd fsdfsd s df sdf sdfsdfsdfsdfsd sdsdfsdf.sddf sdf sdf sds df sdf sd fs f sdf sd fsd f sdf sd fds  </span>
                              <img src={user} alt="user" width="20px" className='rounded-full ml-2'></img>
                           </div>
                     </div>   
                     </li>
                   </ul>
                </div>
           </div>

           {/* text typing area  */}
         
           <div className="flex items-center mb-1 w-full">
               <img src={attach} alt="user" width="25px" className='rounded-full mr-2'></img>
                <img src={emoji} alt="user" width="25px" className='rounded-full mr-2'></img>
                <textarea placeholder="Wanna comment something !" className="px-2 py-1 border m-1 w-full rounded-xl bg-slate-100" ></textarea>
                <img src={send} alt="send" width="30px" className='rounded-full ml-2' ></img>
               </div>

     

        </div>
     );
}
 
export default Chatbox;