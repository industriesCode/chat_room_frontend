import {useEffect, useState} from 'react';
import axios from 'axios';
const Login = ({isLogin, setIsLogin}) => {

    const [loginFormToggle, setLoginFormToggle] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/signin/', {
                username,
                password,
            });

            setIsLogin(true)
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className={"flex flex-col h-screen w-full items-center justify-center relative"}>
            <div className={"container mx-auto w-full md:w-2/12 p-5 rounded " + (!loginFormToggle ? 'z-0' : 'z-30')}>
                {error && <small className={"flex justify-center items-center text-center pb-5 font-semibold text-red-300"}>{error}</small>}
                <form action="" onSubmit={handleSubmit}>
                    <div className="container-fluid grid max-h-max">
                        <div className="row-span-1 mb-8 text-center">
                            <label className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="username"
                                    className="w-10/12 rounded py-2 pl-3 outline-none"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                                <span className="font-proxima-nova absolute left-1 -translate-y-4 bg-transparent px-2 text-xs font-normal text-white">Username</span>
                            </label>
                        </div>

                        <div className="row-span-1 mb-4 text-center">
                            <label className="mx-1/3 relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-10/12 rounded  py-2 pl-3 outline-none"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span className="font-proxima-nova absolute left-1 -translate-y-4 bg-transparent px-2 text-xs text-white">Password</span>
                            </label>
                        </div>
                        <div className="row-span-1 mb-8 text-center">
                            <button className="font-proxima-nova cursor-pointer rounded bg-blue-300 hover:bg-blue-400 px-8 py-1 text-white" type="submit">
                                Submit
                            </button>
                        </div>
                        <div className={"flex flex-row justify-around py-2 text-white font-semibold"}>
                            <small className={"cursor-pointer"}>Sign Up</small>
                            <small className={"cursor-pointer"}>Forgot Password?</small>
                        </div>
                    </div>
                </form>
            </div>
            <div className={"absolute grid grid-cols-2 z-10 w-full h-screen"}>
                <div className={"md:bg-[#97D1E3] transition-transform duration-500 ease-in-out transform " + (loginFormToggle ? 'scale-80 translate-x-1/2 translate-y-1/2 rounded' : '')}></div>
                <div className={"md:bg-[#ED9B9D] transition-transform duration-500 ease-in-out transform " + (loginFormToggle ? 'scale-80 -translate-x-1/2 translate-y-1/2 rounded' : '')}></div>
                <div className={"md:bg-[#F2CBAD] transition-transform duration-500 ease-in-out transform " + (loginFormToggle ? 'scale-80 translate-x-1/2 -translate-y-1/2 rounded' : '')}></div>
                <div className={"md:bg-[#7874B2] transition-transform duration-500 ease-in-out transform " + (loginFormToggle ? 'scale-80 -translate-x-1/2 -translate-y-1/2 rounded' : '')}></div>
            </div>
            <span className={"hidden md:block absolute bg-blue-300 px-10 py-2 rounded drop-shadow-lg cursor-pointer text-white hover:bg-blue-400 " + (!loginFormToggle ? 'z-20' : 'z-0')} onClick={() => setLoginFormToggle(true)}>Sign In</span>

        </div>
    )
}

export default Login