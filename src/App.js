import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";

function App() {
  return (
    <div>
        <div className={"flex flex-col h-screen"}>
            < Header/>
            < Chat/>
        </div>
        < Sidebar/>
    </div>
  );
}

export default App;
