import ChatList from "../components/common-components/ChatList";
import Chatbox from "../components/common-components/Chatbox";

const Messages = () => {
    return ( 
        <div className="flex bg-[#ebe9e9] gap-2 h-screen ">
           <aside className="flex-col w-[28%] h-[100vh] bg-white overflow-y-scroll scroll-container ">
                {/* chat list here  */}
                <ChatList />
           </aside>
           <main className="flex-col w-[70%] h-[100vh] bg-white    ">
              {/* chatbox here  */}
              <Chatbox />
           </main>
        </div>
     );
}
 
export default Messages;