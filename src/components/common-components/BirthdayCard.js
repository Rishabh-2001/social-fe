import user from '../../assets/Avatar.svg'
import send from '../../assets/send-outline.svg'
const BirthdayCard = () => {
    return ( 
        <div className="flex-col mt-2 bg-white px-2 py-2.5 rounded-xl">
           <div className="flex justify-between pb-2 border-b border-gray-500">
               <h2 className=" font-bold text-sm text-[#333]">Birthdays</h2>
               <h4 className="text-blue-500 font-medium text-sm">See All</h4>
           </div>
         
           <div className='flex my-2  '>
                    <img src={user} alt="user" width="40px" className='rounded-full mr-4'></img>
                    <div className='flex-col items-center'>
                        <h2 className='font-semibold text-[#444] text-2sm'>Guest User</h2>
                        <h3 className='font-200 text-[#bbbaba] text-sm'>Birthday today</h3>
                    </div>
                </div>
                <div className='flex justify-between mt-2'>
                <textarea placeholder="Wish him, in Inbox !" className="px-1 text-sm border w-full rounded bg-slate-200"></textarea>
                <img src={send} alt="send" width="20px" className='rounded-full ml-2'></img>
                </div>
                <div className='mt-4'>
                   <h2 className='font-semibold text-[#747373] text-sm rounded bg-slate-200 cursor-pointer px-2 py-1'>See 12 Other Upcoming Birthdays !</h2>
                </div>
         
        </div>
     );
}
 
export default BirthdayCard;