import {useState} from 'react';
import axios from 'axios';
import {useAppContext} from "../context/chatContextAPI";
const Login = () => {

    const [loginFormToggle, setLoginFormToggle] = useState(false);
    const [signupFormToggle, setSignupFormToggle] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { dispatch } = useAppContext();

    const signupClick = () => {
        setLoginFormToggle(false);
        setSignupFormToggle(true);
    };

    const signinClick = () => {
        dispatch({ type: 'SET_SIDEBAR_TOGGLE', payload: true })
        setLoginFormToggle(true);
        setSignupFormToggle(false);
    };

    const resetClick = () =>{
        setLoginFormToggle(false);
        setSignupFormToggle(false);
    }

    const handleSigninSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.post('http://localhost:8000/signin/', {
                username,
                password,
            });

            dispatch({ type: 'SET_USER_DATA', payload: resp.data.user })
            dispatch({ type: 'SET_IS_LOGIN', payload: true })

        } catch (error) {
            setError('Invalid username or password');
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            if(signupPassword === signupConfirmPassword) {
                await axios.post('http://localhost:8000/signup/', {
                    "username": signupUsername,
                    "password": signupPassword
                });

                dispatch({ type: 'SET_IS_LOGIN', payload: true })
            }
            else {
                setError('Password And Confirm Password Should Be Same!');
            }
        } catch (error) {
            setError('Something went wrong!');
        }
    };


    return (
        <div className={"flex flex-col h-screen w-full items-center justify-center relative"}>
            <div className={"container mx-auto w-full md:w-2/12 p-5 rounded " + (!loginFormToggle ? 'z-0' : 'z-30')}>
                {error && <small className={"flex justify-center items-center text-center pb-5 font-semibold text-red-300"}>{error}</small>}
                <form action="" onSubmit={handleSigninSubmit}>
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
                            <small className={"cursor-pointer"} onClick={signupClick}>Sign Up</small>
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
            <span className={"hidden md:block absolute bg-blue-300 px-10 py-2 rounded drop-shadow-lg cursor-pointer text-white hover:bg-blue-400 " + (!loginFormToggle && !signupFormToggle ? 'z-20' : 'z-0')} onClick={signinClick}>Sign In</span>
            {signupFormToggle ? <div className={"absolute container mx-auto w-full md:w-2/12 p-5 rounded bg-black bg-opacity-20 pt-10 " + (!signupFormToggle ? 'z-0' : 'z-30')}>
                {error && <small className={"flex justify-center items-center text-center pb-5 font-semibold text-red-300"}>{error}</small>}
                <form action="" onSubmit={handleSignupSubmit}>
                    <div className="container-fluid grid max-h-max">
                        <div className="row-span-1 mb-8 text-center">
                            <label className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="username"
                                    className="w-10/12 rounded py-2 pl-3 outline-none"
                                    onChange={(e) => setSignupUsername(e.target.value)}
                                    required
                                />
                                <span className="font-proxima-nova absolute left-1 -translate-y-4 bg-transparent px-2 text-xs font-normal text-white">Username</span>
                            </label>
                        </div>

                        <div className="row-span-1 mb-8 text-center">
                            <label className="mx-1/3 relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-10/12 rounded  py-2 pl-3 outline-none"
                                    onChange={(e) => setSignupPassword(e.target.value)}
                                    required
                                />
                                <span className="font-proxima-nova absolute left-1 -translate-y-4 bg-transparent px-2 text-xs text-white">Password</span>
                            </label>
                        </div>
                        <div className="row-span-1 mb-4 text-center">
                            <label className="mx-1/3 relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="w-10/12 rounded py-2 pl-3 outline-none"
                                    onChange={(e) => setSignupConfirmPassword(e.target.value)}
                                    required
                                />
                                <span className="font-proxima-nova absolute left-1 -translate-y-4 bg-transparent px-2 text-xs text-white">Confirm Password</span>
                            </label>
                        </div>
                        <div className="row-span-1 mb-8 text-center">
                            <button className="font-proxima-nova cursor-pointer rounded bg-blue-300 hover:bg-blue-400 px-8 py-1 text-white" type="submit">
                                Submit
                            </button>
                        </div>
                        <div className={"flex flex-row justify-around py-2 text-white font-semibold"}>
                            <small className={"cursor-pointer"} onClick={resetClick}>Back</small>
                            <small className={"cursor-pointer"}>Forgot Password?</small>
                        </div>
                    </div>
                </form>
            </div> : <> </>}

        </div>
    )
}

export default Login