import transparentLogo from '../img/logo/logo Transparent.png'
import {useAppContext} from "../context/chatContextAPI";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const Sidebar = () => {

    const { state, dispatch } = useAppContext();
    const username = localStorage.getItem('userName');
    const [createRoom, setCreateRoom] = useState(false);
    const roomsToday = state.rooms.today;
    const roomsYesterday = state.rooms.yesterday;
    const roomsOlder = state.rooms.older;
    const { register, handleSubmit, reset } = useForm();

    const setStates = (data) => {
        dispatch({ type: 'SET_SIDEBAR_TOGGLE', payload: false })
        dispatch({ type: 'SET_ROOM_CLICK', payload: data })
    }

    const goToHome = () => {
        dispatch({ type: 'SET_SIDEBAR_TOGGLE', payload: false })
        dispatch({ type: 'SET_ROOM_CLICK', payload: '' })
    }

    const deleteRoom = (name) => {
        const allRooms = [...state.rooms.today, ...state.rooms.yesterday, ...state.rooms.older];
        const updatedRooms = allRooms.filter(room => room.name !== name);

        axios.delete(`http://localhost:8000/room/?name=${name}`)
            .then(res => {
                dispatch({ type: 'SET_SIDEBAR_TOGGLE', payload: false })
                dispatch({ type: 'SET_ROOM_CLICK', payload: '' })
                dispatch({ type: 'SET_ROOMS', payload: updatedRooms})
                dispatch({ type: 'SET_UPDATE_TOGGLE', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'SET_ERRORS', payload: err.messages })
                dispatch({ type: 'SET_MESSAGES', payload: [...state.messages] })
            })
    }

    const addRoom = (data) => {
        const newRoom = { ...data, created_by: username };
        axios.post("http://localhost:8000/room/", newRoom)
            .then(res => {
                dispatch({ type: 'ADD_MESSAGE', payload: res.data })
                dispatch({ type: 'SET_UPDATE_TOGGLE', payload: res.data })
                setCreateRoom(false)
            })
            .catch(err => {
                dispatch({ type: 'SET_ERRORS', payload: err.messages })
                dispatch({ type: 'SET_MESSAGES', payload: [...state.messages] })
            })
    }

    return(
        <aside className={"flex flex-col sidebar bg-gray-50 shadow-2xl text-white h-screen fixed top-0 left-0 z-40 overflow-y-auto w-56 md:transform-none" + (state.sidebarToggle ? 'transition-all ease-in-out duration-300 transform -translate-x-full':'')}>
            <div className="flex-grow">
                 {/*Logo and Name*/}
                <div className="relative text-center py-6 pt-0">
                    {/*Mobile Menu Button*/}
                    <div className="pt-5">
                        <img src={transparentLogo} alt="Logo" className="mx-auto w-12 animate-pulse cursor-pointer" onClick={() => goToHome()} />
                        <div className="tracking-wider">
                            <h1 className="text-sm font-semibold text-gray-500">LETS CHAT</h1>
                            <small className="text-xs font-normal text-gray-400 whitespace-pre-line flex items-center justify-center gap-0">I think talking things out is <br/>therapeutic</small>
                        </div>
                    </div>
                </div>

                {/*Navigation Links*/}
                <div className="flex flex-col overflow-y-auto">
                    <hr className="w-4/5 pb-3 self-center"/>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-row justify-center cursor-pointer py-1 text-blue-500 ring-1 ring-blue-300 mx-5 mb-2 rounded drop-shadow-lg hover:bg-blue-400 hover:text-white transition-all ease-in-out duration-300" onClick={() => setCreateRoom(true)}>
                            <span className="font-normal text-xs pr-1">Create Room</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>
                        </div>
                        {
                            createRoom &&
                            <div className="text-gray-500 mb-2 ring-1 ring-blue-300 mx-5 rounded px-1 transition-all ease-in-out duration-300">
                                <form className="flex flex-row items-center self-center px-1 w-full" action="" onSubmit={handleSubmit((data) => {addRoom(data);
                                    reset()
                                })}>
                                    <input
                                        type="text"
                                        name="room"
                                        id="room"
                                        className="bg-transparent outline-none text-gray-500 text-xs py-1"
                                        {...register("room")}
                                        placeholder="Room Name"
                                    />
                                    <button type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                             stroke="currentColor" className="w-4 h-4 text-blue-400 animate-pulse">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        }
                        <hr className="w-4/5 pb-3 self-center"/>
                        <nav className="text-gray-400 pl-2">
                            <div className="px-4 flex flex-col gap-y-3">
                                <ul className="pb-3 flex flex-col gap-y-1">
                                    <li className="text-sm font-medium text-gray-500">Today</li>
                                    { roomsToday && roomsToday.map((room, index) =>
                                        (
                                            <li className="flex flex-row items-center" key={ index }>
                                                <span className={"block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer " + (state.roomClick === room.name ? 'text-blue-400 animate-pulse':'')}  onClick={() => setStates(room.name)}>{ room.name }</span>
                                                {
                                                    room['created_by'] === username &&
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-red-300 cursor-pointer hover:scale-110 transition-transform duration-100" onClick={() => deleteRoom(room.name)}>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                    </svg>
                                                }
                                            </li>
                                        )
                                    )}
                                </ul>

                                <ul className="pb-3 flex flex-col gap-y-1">
                                    <li className="text-sm font-medium text-gray-500">Yesterday</li>
                                    { roomsYesterday && roomsYesterday.map((room, index) =>
                                        (
                                            <li className="flex flex-row items-center" key={ index }>
                                                <span className={"block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer " + (state.roomClick === room.name ? 'text-blue-400 animate-pulse':'')} onClick={() => setStates(room.name)}>{ room.name }</span>
                                                {
                                                    room['created_by'] === username &&
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-red-300 cursor-pointer hover:scale-110 transition-transform duration-100" onClick={() => deleteRoom(room.name)}>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                    </svg>
                                                }
                                            </li>
                                        )
                                    )}
                                </ul>

                                <ul className="pb-3 flex flex-col gap-y-1">
                                    <li className="text-sm font-medium text-gray-500">Old</li>
                                    { roomsOlder && roomsOlder.map((room, index) =>
                                        (
                                            <li className="flex flex-row items-center" key={ index }>
                                                <span className={"block py-1 px-4 text-sm text-bold hover:scale-105 transition-transform duration-100 cursor-pointer" + (state.roomClick === room.name ? 'text-blue-400 animate-pulse' : '')} onClick={() => setStates(room.name)}>{ room.name }</span>
                                                {
                                                    room['created_by'] === username &&
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                             strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 text-red-300 cursor-pointer hover:scale-110 transition-transform duration-100" onClick={() => deleteRoom(room.name)}>
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                        </svg>
                                                }
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar