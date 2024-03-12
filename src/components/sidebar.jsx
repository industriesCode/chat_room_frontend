import transparentLogo from '../img/logo/logo Transparent.png'
const Sidebar = ({toggle}) => {
    return(
        <aside className={"flex flex-col sidebar bg-gray-50 shadow-2xl text-white h-screen fixed top-0 left-0 z-40 overflow-y-auto w-56 md:transform-none" + (toggle ? 'transition-all ease-in-out duration-300 transform -translate-x-full':'')}>
            <div className="flex-grow">
                 {/*Logo and Name*/}
                <div className="relative text-center py-6 pt-0">
                    {/*Mobile Menu Button*/}
                    <div className="pt-5">
                        <img src={transparentLogo} alt="Logo" className="mx-auto w-12 animate-pulse" />
                            <div className="tracking-wider">
                                <h1 className="text-sm font-semibold text-gray-500">LETS CHAT</h1>
                                <small className="text-xs font-normal text-gray-400 whitespace-pre-line flex items-center justify-center gap-0">I think talking things out is <br/>therapeutic</small>
                            </div>
                    </div>
                </div>

                {/*Navigation Links*/}
                <div className="flex flex-col justify-start overflow-y-auto">
                    <hr className="w-4/5 pb-3 self-center"/>
                    <nav className="text-gray-400 pl-2">
                        <div className="px-4 flex flex-col gap-y-3">
                            <ul className="pb-3 flex flex-col gap-y-1">
                                <li className="text-sm font-medium text-gray-500">Today</li>

                                <li><span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer">Tungnath Trip</span></li>
                                <li className={"flex items-center"}>
                                    <span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer text-blue-400">Learn React</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 text-blue-400 animate-bounce">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"/>
                                    </svg>
                                </li>
                                <li><span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer">StandUp Call</span></li>
                            </ul>

                            <ul className="pb-3 flex flex-col gap-y-1">
                                <li className="text-sm font-medium text-gray-500">Yesterday</li>

                                <li><span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer">Status Update</span></li>
                                <li><span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer">Availability</span></li>
                            </ul>

                            <ul className="pb-3 flex flex-col gap-y-1">
                                <li className="text-sm font-medium text-gray-500">Old</li>
                                <li><span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer">Fun Friday</span></li>
                                <li><span className="block py-1 px-4 text-xs text-bold hover:scale-105 transition-transform duration-100 cursor-pointer">Saturday Meeting</span></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar