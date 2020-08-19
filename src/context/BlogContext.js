import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducer/reducer';

export const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <BlogContext.Provider value={{ state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}