const Chat = ({sidebarToggle, setSidebarToggle}) => {
    return(
        <div className={"flex flex-col z-20 w-full h-full p-5"} onClick={(e) => setSidebarToggle(false) }>
            <div className={"w-full h-full pt-10 overflow-y-auto"}>
                <div className={"fixed z-20 flex flex-col md:p-5 md:ml-5 w-max"}>
                    <span className={"tracking-wider font-semibold custom-text-shadow text-gray-500 p-1 rounded"}>LEARN REACT</span>
                    <hr/>
                </div>
                <div className="fixed top-0 left-0 z-10 w-full h-20 md:h-28 bg-gradient-to-t from-white to-white pointer-events-none"></div>
                <div className={"h-10 md:h-20"}></div>
                <div className={"flex flex-col p-5 w-full"}>
                    <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1"}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        Sahil Dadwal
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi, my name is Sahil Dadwal.<br/>I need some help related to my react project.</span>
                </div>

                <div className={"flex flex-col p-5 w-full"}>
                    <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1 "}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        Kunal Singh
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi, Sahil Dadwal.<br/>Welcome to the Group.</span>
                </div>

                <div className={"flex flex-col p-5 w-full"}>
                    <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1"}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-gray-500 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-gray-500 rounded-full"></span>
                        </span>
                        Aditya Mehta
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg"}><span className={"text-blue-500 font-semibold"}>@Sahil Dadwal</span>, Need update</span>
                </div>

                <div className={"flex flex-col items-end p-5 w-full"}>
                    <div className={"p-1"}>
                        <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1"}>
                            <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                              <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                              <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                            </span>
                            You
                        </small>
                        <div className={"flex flex-col p-5 bg-gray-100 rounded drop-shadow-lg"}>
                            <div className={"flex flex-col ml-2 w-max drop-shadow-sm"}>
                                <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1"}>
                                    <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                                      <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                                      <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                                    </span>
                                    Sahil Dadwal
                                </small>
                                <span className={"bg-gray-50 p-3 rounded font-normal text-[11px] text-gray-500 shadow-inner"}>Hi, my name is Sahil Dadwal.<br/>I need some help related to my react project.</span>
                            </div>
                            <span className={"bg-gray-50 p-3 pl-1 mt-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi, Sahil Dadwal, I can help you.</span>
                        </div>
                    </div>

                </div>
                <div className={"flex flex-col p-5 w-full"}>
                    <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1"}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        Faisal Ahmed
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi Sahil<br/>Ping me separately if you want any help from me.</span>
                </div>

                <div className={"flex flex-col p-5 w-full"}>
                    <small className={"flex group items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1 "}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        Kunal Singh
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 w-max rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Drop your query here only.</span>
                </div>
            </div>
            <div className={"flex flex-row items-center z-30 w-full h-max px-2 rounded ring-1 ring-blue-300"}>
                <input
                    type="text"
                    name="message"
                    className="w-full rounded py-2 pl-3 outline-none "
                    required
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6 text-blue-400 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
                </svg>

            </div>
        </div>
    )
}

export default Chat