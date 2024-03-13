import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import {useState} from "react";
import Login from "./components/login";

function App() {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    console.log(isLogin)

    return (
    <div>
        {!isLogin ? <Login isLogin={isLogin} setIsLogin={setIsLogin} /> :
            <>
                <div className={"flex flex-col h-screen w-full"}>
                    < Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
                    < Chat sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
                </div>
                <Sidebar sidebarToggle={sidebarToggle} />
            </>
        }
    </div>
  );
}

export default App;
