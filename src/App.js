import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import {useEffect, useState} from "react";
import Login from "./components/login";
import axios from "axios";

function App() {
    const [rooms, setRooms] = useState([]);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [updateToggle, setUpdateToggle] = useState(false);
    const [errors, setErrors] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/create-room/")
            .then(res => setRooms(res.data))
            .catch(err => setErrors(err.message))
    }, [updateToggle])
    console.log(rooms)
    return (
        <div>
            {!isLogin ? <Login isLogin={isLogin} setIsLogin={setIsLogin} /> :
                <>
                    <div className={"flex flex-col h-screen w-full"}>
                        < Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
                        < Chat sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
                    </div>
                    <Sidebar rooms = { rooms } sidebarToggle={sidebarToggle} />
                </>
            }
        </div>
  );
}

export default App;
