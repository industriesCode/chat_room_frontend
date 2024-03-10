import userProfile from '../img/profile/picture.jpg'
const Chat = () => {
    return(
        <div className={"w-full md:pl-56 h-full p-5"}>
            <div className={"w-full h-full "}>
                <div className={"flex flex-col p-5 ml-5 w-max"}>
                    <span className={"tracking-wider font-semibold custom-text-shadow text-gray-500 p-1 rounded"}>LEARN REACT</span>
                    <hr/>
                </div>
                <div className={"flex flex-col p-5 ml-5 w-max"}>
                    <small className={"flex group justify-center items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1"}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        Sahil Dadwal
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi, my name is Sahil Dadwal.<br/>I need some help related to my react project.</span>
                </div>

                <div className={"flex flex-col p-5 ml-5 w-max"}>
                    <small className={"flex group justify-center items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1 "}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        Kunal Singh
                    </small>

                    <span className={"bg-gray-100 p-3 pl-1 rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi, Sahil Dadwal.<br/>Welcome to the Group.</span>
                </div>

                <div className={"flex flex-col float-end p-5 ml-5 w-max"}>
                    <small className={"flex group justify-center items-center sm:justify-start gap-x-3 font-semibold text-gray-500 mb-1 "}>
                        <span className="relative flex w-2 h-2 -mr-2 drop-shadow">
                          <span className="absolute inline-flex w-full h-full bg-green-800 rounded-full opacity-75 animate-ping"></span>
                          <span className="relative inline-flex w-2 h-2 bg-green-600 rounded-full"></span>
                        </span>
                        You
                    </small>
                    <div className={"flex flex-col p-5 bg-gray-500"}>
                        <span className={"bg-gray-100 p-3 pl-1 rounded font-normal text-sm text-gray-500 drop-shadow-lg"}>Hi, Sahil Dadwal.<br/>I can help you.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chat