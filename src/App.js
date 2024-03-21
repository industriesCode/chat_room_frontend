import './App.css';
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Chat from "./components/chat";
import {useEffect} from "react";
import Login from "./components/login";
import axios from "axios";
import {useAppContext} from "./context/chatContextAPI";

function App() {

    const { state, dispatch } = useAppContext();

    useEffect(() => {
        axios.get("http://localhost:8000/room/")
            .then(res =>  dispatch({ type: 'SET_ROOMS', payload: res.data }))
            .catch(err => dispatch({ type: 'SET_ERRORS', payload: err }))
    }, [state.updateToggle])

    useEffect( () => {
        dispatch({ type: 'SET_MESSAGES', payload: [...state.messages] })
        axios.get(`http://localhost:8000/message/?data=${state.roomClick}`)
            .then(res => dispatch({ type: 'SET_MESSAGES', payload: res.data }))
            .catch(err => dispatch({ type: 'SET_ERRORS', payload: err.messages }))
    }, [state.roomClick])

    const addMessage = (data) => {
        dispatch({ type: 'ADD_MESSAGE', payload: [...state.message, data={...data, room:state.roomClick, sent_by:state.userData.username}] })
        axios.post("http://localhost:8000/message/", data)
        .then(res => {
            dispatch({ type: 'ADD_MESSAGE', payload: res.data })
            dispatch({ type: 'SET_UPDATE_TOGGLE', payload: res.data })
        })
        .catch(err => {
            dispatch({ type: 'SET_ERRORS', payload: err.messages })
            dispatch({ type: 'SET_MESSAGES', payload: [...state.messages] })
        })
    }

    return (

        <div>
            {!state.isLogin ? <Login/> :
                <>
                    <div className={"flex flex-col h-screen w-full"}>
                        < Header />
                        < Chat addMessage={ addMessage }/>
                    </div>
                    <Sidebar/>
                </>
            }
        </div>
  );
}

export default App;
