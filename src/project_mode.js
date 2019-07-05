import React, {createContext} from 'react';
require('dotenv').config()

export const ModeContext = createContext();
const env = process.env.NODE_ENV

let mode_url = ''
if (env === "development")
{
    mode_url = process.env.REACT_APP_DEV
}
else{
    mode_url = process.env.REACT_APP_PROD
}

export const ModeProvider = (props) => {
    return(
        <ModeContext.Provider value={mode_url}>
            {props.children}
        </ModeContext.Provider>
    );
}