import React, { useReducer } from 'react';
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

 const initialState = {
    favoriteDentistas: [],
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FAVORITE_DENTIST':
        return {
          ...state,
          favoriteDentistas: [...state.favoriteDentistas, action.payload],
        };
      case 'REMOVE_FAVORITE_DENTIST':
        return {
          ...state,
          favoriteDentistas: state.favoriteDentistas.filter(dentista => dentista.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  const Favs = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
     React.useEffect(() => {
      const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favoriteDentistas')) || [];
      dispatch({ type: 'SET_FAVORITE_DENTISTS', payload: favoritesFromLocalStorage });
    }, []);
  
    
    const removeFavoriteDentista = (id) => {
      dispatch({ type: 'REMOVE_FAVORITE_DENTIST', payload: id });
    };
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favoriteDentistas.map(dentista => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
            onRemove={() => removeFavoriteDentista(dentista.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
