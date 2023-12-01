import user from '../../assets/Avatar.svg'
const LikeCard = () => {
    return ( 
        <div className="flex-col mt-2 bg-white px-2 py-2.5 rounded-xl">
           <div className="flex justify-between pb-2 border-b border-gray-500">
               <h2 className=" font-bold text-sm text-[#333]">You Might Like</h2>
               <h4 className="text-blue-500 font-medium text-sm">See All</h4>
           </div>
         
           <div className='flex my-2  '>
                    <img src={user} alt="user" width="40px" className='rounded-full mr-4'></img>
                    <div className='flex-col items-center'>
                        <h2 className='font-semibold text-[#444] text-2sm'>Guest User</h2>
                        <h3 className='font-200 text-[#bbbaba] text-sm'>Founder at Trivea</h3>
                    </div>
                </div>
                <div className='flex justify-between mt-4'>
                    <button className='bg-[#ebeaea] text-[#868484] font-semibold px-3 py-1.5 rounded'>Ignore</button>
                    <button className='bg-blue-500 text-white font-semibold px-3 py-1.5 rounded'>Follow</button>
                </div>
         
        </div>
     );
}
 
export default LikeCard;