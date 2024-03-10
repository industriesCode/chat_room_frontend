import userProfile from '../img/profile/picture.jpg'
const Header = () => {
    return(
        <header className="bg-blue-300 ">
            <div className="flex justify-between items-center px-4 lg:px-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                </svg>
                <nav className="static flex items-center justify-end bg-blue-300 border-gray-200 p-2 gap-2 px-4">
                     {/*Navbar Input Search */}
                    <div className="relative">
                        <div className="absolute flex items-center inset-y-0 ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="search-navbar"
                               className="p-1 px-10 text-sm bg-white rounded-full outline-none focus:ring-1 focus:ring-blue-400"
                               placeholder="Search..."/>
                    </div>

                     {/*Navbar Profile */}
                    <div className="static flex">
                        <span id="profile-button" className="flex border-2 rounded-full p-1 cursor-pointer"
                           aria-expanded="false" data-dropdown-toggle="profile-dropdown"
                           data-dropdown-placement="bottom">
                            <img className="w-4 h-4 rounded-full" src={userProfile} alt="User"/>
                        </span>

                         {/*Dropdown menu */}
                        <div id="profile-dropdown"
                             className="absolute inset-12 bg-white drop-shadow-2xl px-1.5 rounded start-auto end-10 max-w-max max-h-max hidden">
                            <div className="absolute flex inset-x-0 w-11/12">
                                <div className="relative w-4 h-4 bg-white inset-x-20 -inset-y-2 rotate-45"></div>
                            </div>
                            <ul className="relative rounded text-sm text-gray-700" aria-labelledby="profile-button">
                                <li>
                                    <span className="block px-3 py-2 font-normal text-base text-black rounded-lg hover:bg-gray-100">Dashboard</span>
                                </li>
                                <li>
                                    <span className="block px-3 py-2 font-normal text-base text-black rounded-lg hover:bg-gray-100">Settings</span>
                                </li>
                                <li>
                                    <span className="block px-3 py-2 font-normal text-base text-black rounded-lg hover:bg-gray-100">Earnings</span>
                                </li>
                                <li>
                                    <span className="block px-3 py-2 font-normal text-base text-black rounded-lg hover:bg-gray-100">Sign Out</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Navbar Notifications */}
                    <div className="static flex order-last">
                        <span id="notification-button" className="flex border-2 rounded-full p-1.5 cursor-pointer"
                           aria-expanded="false" data-dropdown-toggle="dropdown" data-dropdown-placement="down">
                            <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"/>
                            </svg>
                        </span>

                        <div id="dropdown-notification"
                             className="absolute inset-12 bg-white drop-shadow-2xl py-4 px-2 rounded start-auto end-1 divide-x-2 divide-gray-100 max-w-max max-h-max hidden">
                            <div className="relative flex justify-center bg-black w-11/12">
                                <div className="absolute w-4 h-4 bg-white drop-shadow-2xl inset-x-full -inset-y-6 rotate-45"></div>
                            </div>
                            <div
                                className="bg-white py-2 px-4 rounded-xl flex w-auto hover:bg-gray-200 transition duration-300 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                </svg>
                                <div className="flex flex-col content-center">
                                    <h6 className="font-semibold  text-base text-[#344767] mr-1">Leave Message
                                        <span className="font-semibold  text-base text-slate-500">Dr Jignesh </span>
                                    </h6>
                                    <p className="font-normal relative text-sm text-slate-400 start-[20px]"> 13
                                        minutes ago
                                        <svg className="absolute w-4 h-4 inset-[2px] -start-[20px]"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>

                            <div
                                className=" bg-white py-2 mt-3 px-4 rounded-xl flex w-auto hover:bg-gray-200 transition duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                </svg>

                                <div className="flex flex-col content-center">
                                    <h6 className="font-semibold  text-base text-[#344767] mr-1">Alert Message
                                        <span
                                            className="font-semibold  text-base text-slate-500">Icu Bed Alert</span>
                                    </h6>
                                    <p className="font-normal relative text-sm text-slate-400 start-[20px]"> 13
                                        minutes ago
                                        <svg className="absolute w-4 h-4 inset-[2px] -start-[20px]"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>

                            <div
                                className=" bg-white  py-2 mt-3 px-4 rounded-xl flex w-auto max-h-max hover:bg-gray-200 transition duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"/>
                                </svg>
                                <div className="flex flex-col content-center">
                                    <h6 className="font-semibold  text-base text-[#344767] mr-1">Help Message
                                        <span
                                            className="font-semibold  text-base text-slate-500">Emergency Exit</span>
                                    </h6>
                                    <p className="font-normal relative text-sm text-slate-400 start-[20px]"> 13
                                        minutes ago
                                        <svg className="absolute w-4 h-4 inset-[2px] -start-[20px]"
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header