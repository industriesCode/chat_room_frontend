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
    const [message, setMessage] = useState([]);
    const [messages, setMessages] = useState([]);
    const [userData, setUserData] = useState('');
    const [roomClick, setRoomClick] = useState('');


    useEffect(() => {
        axios.get("http://localhost:8000/room/")
            .then(res => setRooms(res.data))
            .catch(err => setErrors(err.message))
    }, [updateToggle])

    useEffect( () => {
        setMessages( [...messages])
        axios.get(`http://localhost:8000/message/?data=${roomClick}`)
            .then(res => setMessages(res.data))
            .catch(err => setErrors(err.message))
    }, [roomClick])

    const addMessage = (data) => {
        setMessage( [...message, data={...data, room:roomClick, sent_by:userData.username}])
        axios.post("http://localhost:8000/message/", data)
        .then(res => {
            setMessage([...message, res.data])
            setUpdateToggle(prevState => !prevState);
        })
        .catch(err => {
            setErrors((err.message))
            setMessage([...messages])
        })
    }

    return (
        <div>
            {!isLogin ? <Login setIsLogin={setIsLogin} setUserData={setUserData}/> :
                <>
                    <div className={"flex flex-col h-screen w-full"}>
                        < Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} userData={userData}/>
                        < Chat sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} userData={userData} roomClick={roomClick} addMessage={ addMessage } messages={messages} updateToggle={updateToggle} setUpdateToggle={setUpdateToggle}/>
                    </div>
                    <Sidebar rooms = { rooms } sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}  setRoomClick={setRoomClick}/>
                </>
            }
        </div>
  );
}

export default App;
