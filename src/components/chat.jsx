import React from 'react'
import { useForm } from 'react-hook-form'
import {useAppContext} from "../context/chatContextAPI";

const Chat = ({addMessage}) => {
    const { register, handleSubmit, reset } = useForm();
    const { state, dispatch } = useAppContext();
    console.log(state)
    return(
        <div className={"flex flex-col z-20 w-full h-full p-5"} onClick={(e) => !state.sidebarToggle && dispatch({ type: 'SET_SIDEBAR_TOGGLE' }) }>
            <div className={"w-full h-full pt-10 overflow-y-auto"} >
                <div className={"fixed z-20 flex flex-col md:p-5 md:ml-5 w-max"}>
                    <span className={"tracking-wider font-semibold custom-text-shadow text-gray-500 p-1 rounded"}>{ state.roomClick }</span>
                    <hr/>
                </div>
                <div className="fixed top-0 left-0 z-10 w-full h-20 md:h-28 bg-gradient-to-t from-white to-white p  ointer-events-none"></div>
                <div className={"h-10 md:h-20"}></div>

                {state.messages.map((message, index) => (
                    <div key={index} className={message.sent_by === state.userData.username ? "flex flex-col items-end p-5 w-full" : "flex flex-col p-5 w-full"}>
                        {message.sent_by !== state.userData.username ? (
                            <div className="flex flex-col">
                                <small className="flex group items-center self-start gap-x-3 font-semibold text-gray-500 mb-1">
                    <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                        <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                        <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                    </span>
                                    {message.sent_by}
                                </small>
                                <span className="bg-gray-100 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg">{message.message}</span>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <div className="flex flex-row justify-start w-max">
                                    <small className="flex group items-center self-start gap-x-3 font-semibold text-gray-500 mb-1">
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                            <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                            <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                                        You
                                    </small>
                                </div>
                                <span className="bg-gray-50 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg">{message.message}</span>
                            </div>
                        )}
                    </div>
                ))}

            </div>
            <div className={"z-30 w-full h-max px-2 rounded ring-1 ring-blue-300"}>
                <form className={"flex flex-row items-center "} action="" onSubmit={handleSubmit((data) => {addMessage(data);
                    reset()
                })}>
                    <input
                        type="text"
                        name="message"
                        id="message"
                        className="w-full rounded py-2 pl-3 outline-none "
                        { ...register("message") }
                        required
                    />

                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 text-blue-400 animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Chat