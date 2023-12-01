import user from '../../assets/Avatar.svg'
const FriendList = ({friend}) => {
    return ( 
        <div>
              <ul>
                    <li className="flex justify-between py-2 px-1.5">
                            <div className="flex items-center">
                                <img src={user} alt="user" width="20px" className='rounded-full mr-2'></img>
                                <h2 className='font-medium text-[#444] text-sm'>{friend?.friendUser?.firstName} {friend?.friendUser?.lastName}</h2>
                            </div>
                            <span className="text-[#979595] text-sm">2 min </span>
                        </li>

                 </ul>
        </div>
     );
}
 
export default FriendList;