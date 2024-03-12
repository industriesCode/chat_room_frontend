import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import {useState} from "react";

function App() {
    const [toggle, setToggle] = useState(true);

    return (
    <div>
        <div className={"flex flex-col h-screen"}>
            < Header toggle={toggle} setToggle={setToggle} />
            < Chat toggle={toggle} setToggle={setToggle} />
        </div>
        <Sidebar toggle={toggle} />
    </div>
  );
}

export default App;
