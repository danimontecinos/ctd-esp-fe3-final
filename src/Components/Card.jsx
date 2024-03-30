import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const card = { id, name, username};
    const favCards = JSON.parse(localStorage.getItem('favCards')) || [];
    favCards.push(card);
    localStorage.setItem('favCards', JSON.stringify(favCards));
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="src\images\doctor.jpg" className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{username}</h6>
        <p className="card-text">ID: {id}</p>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={`/detalle/${id}`} className="btn btn-primary">Ver detalles</Link>
      </div>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
