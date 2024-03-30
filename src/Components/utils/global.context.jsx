import React, { createContext, useContext, useReducer } from "react";

export const initialState = { theme: "light", data: [null] };

export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};

const ThemeContext = createContext(themes.light);
export default ThemeContext;

export const ContextGlobal = createContext();


const SET_API_DATA = "SET_API_DATA";

const reducer = (state, action) => {
  switch (action.type) {
    
    case SET_API_DATA:
      return {
        ...state,
        apiData: action.payload,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

 

  const setApiData = (data) => {
    dispatch({ type: SET_API_DATA, payload: data });
  };

  return (
    <ContextGlobal.Provider value={{ state, setApiData }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);