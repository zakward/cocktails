import React from "react"

const ListContext = React.createContext()

function ContextProvider(props) {



  


    return (
        <ListContext.Provider>
            {props.children}
        </ListContext.Provider>
    )
}
export {ContextProvider, ListContext}