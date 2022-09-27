import React, { createContext, useReducer } from 'react'

type AppState = typeof initialState;
type Action = {type: "SET_MESSAGE", payload: string} |
{ type: "RESET_MESSAGE" }


interface initialState {
    message: string   
}


interface MessageProviderProps {
    children: React.ReactNode;
}

const initialState: initialState = {
    message: ""
}


const MessageReducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case "SET_MESSAGE":
            return {
                message: action.payload
            }
        case "RESET_MESSAGE": {
            return {
                message: ""
            }
        }
    }
}

export const MessageContext = createContext<{state: AppState, dispatch: React.Dispatch<Action>}>({state: initialState, dispatch: () => {}})


export const MessageProvider = ({children}: MessageProviderProps) => {
    const [state, dispatch] = useReducer(MessageReducer, initialState);

    return (
        <MessageContext.Provider value={{state, dispatch}}>
            {children}
        </MessageContext.Provider>
    )
}


