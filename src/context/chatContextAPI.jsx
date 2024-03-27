import { createContext, useContext, useReducer } from "react";

// Step 1: Define initial state and reducer
const initialState = {
    rooms: [],
    sidebarToggle: false,
    isLogin: false,
    updateToggle: false,
    errors: "",
    message: [],
    messages: [],
    roomClick: '',
    sendMessageToggle: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_ROOMS':
            return { ...state, rooms: action.payload };
        case 'SET_SIDEBAR_TOGGLE':
            return { ...state, sidebarToggle: !state.sidebarToggle };
        case 'SET_SEND_MESSAGE_TOGGLE':
            return { ...state, sendMessageToggle: !state.sendMessageToggle };
        case 'SET_IS_LOGIN':
            return { ...state, isLogin: action.payload };
        case 'SET_UPDATE_TOGGLE':
            return { ...state, updateToggle: !state.updateToggle };
        case 'SET_ERRORS':
            return { ...state, errors: action.payload };
        case 'ADD_MESSAGE':
            return { ...state, message: [...state.message, action.payload] };
        case 'SET_MESSAGES':
            return { ...state, messages: action.payload };
        case 'SET_USER_DATA':
            return { ...state, userData: action.payload };
        case 'SET_ROOM_CLICK':
            return { ...state, roomClick: action.payload };
        default:
            return state;
    }
}

// Step 2: Create context
const AppContext = createContext();

// Step 3: Create provider component
export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}


export const useAppContext = () => useContext(AppContext);
