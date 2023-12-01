import { io } from "socket.io-client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import "typeface-open-sans";
import HomePage from "./pages/Home";
import Verify from "./components/auth/Verify";
import { ToastContainer } from "react-toastify";
import CommentCard from "./components/common-components/CommentCard";
import NotFound from "./components/common-components/NotFound";
import Feed from "./pages/Feed";
import UserProfile from "./pages/UserProfile";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import { useEffect, useMemo, useState } from "react";
import EditProfile from "./components/common-components/EditProfile";
import GlobalLayout from "./layout/GlobalLayout";
import AuthLayout from "./layout/AuthLayout";

const socketToUserIdMap = {};
var connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

function App() {
  const [sockett, setSockett] = useState();
  const [notCount, setNotCount] = useState(0);
  const userData = useMemo(() => {
    const localStorageData = localStorage.getItem("currentUser");
    return localStorageData ? JSON.parse(localStorageData) : null;
  }, []);
  const [notifications, setNotifications] = useState([]);
  console.log("NOTIFICATIONS ::", notifications);

  useEffect(() => {
    let cnt = 0;
    notifications?.map((not) => {
      if (!not?.is_read) {
        cnt++;
      }
    });
    setNotCount(cnt);
  }, [notifications]);

  useEffect(() => {
    // Replace 'your_server_url' with the URL of your socket.io server
    // Add this -- our server will run on port 4000, so we connect to it from here
    const socket = io("http://localhost:3434/", connectionOptions);
    setSockett(socket);
    socket.on("connect", () => {
      socketToUserIdMap[socket.id] = userData?.userId;
      console.log(
        "User ",
        userData?.userId,
        " is associated with SID",
        socket?.id
      );
    });
    if (userData) {
      socket.emit("addSocketToDB", {
        userId: userData?.userId,
        socketId: socket?.id,
      });
    }

    socket.on("notification", (data) => {
      // Handle the received data here

      console.log("Socket event received:", data);
      setNotifications((prev) => [...prev, data]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      console.log("Socket id disconnected", socket.id);
      socket.disconnect();
    };
  }, []);
  console.log("Infi loop in app");

  return (
    <div className="App w-[100%] box-content">
      <ToastContainer />
      <Routes>
        <Route element={<GlobalLayout />}>
          {/* BEFORE AUTH LAYOUT  */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="verify" element={<Verify />} />
          </Route>

          {/* AFTER AUTH LAYOUT  */}
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <HomePage notCount={notCount} />
              </ProtectedRoute>
            }
          >
            <Route index element={<Feed />} />
            <Route exact path="/home/comment" element={<CommentCard />} />
            <Route exact path="/home/profile" element={<UserProfile />} />
            <Route
              exact
              path="/home/profile/:userId"
              element={<UserProfile />}
            />
            <Route exact path="/home/profile/edit" element={<EditProfile />} />
            <Route exact path="/home/messages" element={<Messages />} />
            <Route
              exact
              path="/home/notifications"
              element={
                <Notification
                  setNotCount={setNotCount}
                  notCount={notCount}
                  notifications={notifications}
                  socket={sockett}
                />
              }
            />
             <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
