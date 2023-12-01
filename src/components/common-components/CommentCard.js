import userDp from '../../assets/Avatar.svg'
const CommentCard = () => {
    return ( 
        <div className="flex items-start gap-1 px-4 py-2 border w-fit">
           <img src={userDp} width="40px" alt='user-pic'></img>
           <div className="flex-col ml-2 "> 
           <h2 className='text-xl font-bold'>John Doe</h2>
            <p className='text-sm text-[#a2a1a1] mb-2'>June 29, 2023</p>
            <p>Let’s begin with what I consider to be the easiest method: importing a CSS file into the component. I think it’s the easiest because it’s the most familiar method if you’ve developed websites before using HTML and CSS</p>
           </div>
        </div>
        
     );
}
 
export default CommentCard;