import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../Components/utils/global.context';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <nav>
        {/* Aquí se agregan los links correspondientes a las rutas definidas */}
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        
        {/* Se implementa además la lógica para cambiar de Theme con el botón */}
        <button onClick={handleChangeTheme} style={{ background: theme.background, color: theme.font }}>
          Change Theme
        </button>
      </nav>
    </div>
  );
};

export default Navbar;