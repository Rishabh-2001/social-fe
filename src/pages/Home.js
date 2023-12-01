import {  Outlet } from "react-router-dom";

import NavMain from "../components/homepage/NavMain";
import Aside from "../components/homepage/Aside";

const HomePage = ({notCount}) => {
    // outlet in home 
    // 

    return ( 
        <div className="">
            <nav className="">
              <NavMain  />
            </nav>
         
            <div className="min-h-[100vh] flex  ">
                <aside className="w-[15%]  ">
                {/* ul lists  */}
                    <Aside  notCount={notCount} />

                </aside>
                <div className="flex-col w-[85%] my-0 mx-auto relative top-20 bg-[#f4f3f3]  ">
                <Outlet />
                </div>
 
</div>
      
          
          

        </div>
     );
}
 
export default HomePage;