import Logoname from "../Logoname";
import SearchBar from "../common-components/SearchBar";
import guest from '../../assets/Avatar.svg'
import { useEffect, useState } from "react";

const NavMain = () => {
  const [user,setUser]=useState()

  useEffect(()=>{
     const usr=JSON.parse(localStorage.getItem('currentUser'))
     setUser(usr?.username);
     
  },[])
    return ( 
        <div className="flex px-4 py-2 justify-between items-center border-b fixed z-20 w-full bg-white  ">
            <div className="flex gap-12 items-center w-full">
                <Logoname />
                <SearchBar />
            </div>
            <div className="flex gap-3 items-center">
                <h2 className="font-semibold text-lg ">{user}</h2>
                 <img src={guest} className="rounded 2xl" alt="nav" width="40px"></img>
            </div>

            </div>
     );
}
 
export default NavMain;