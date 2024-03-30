import React, { useContext, useEffect, useState } from "react";
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { setApiData } = useContext(ContextGlobal);
  const [dentistas, setDentistas] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setDentistas(data);
        // Actualiza el estado global con los datos de la API
        setApiData(data);
      })
      .catch((error) => console.error("Error fetching dentistas:", error));
  };

  useEffect(() => {
    // Llama a fetchData al montar el componente para obtener los datos iniciales
    fetchData();
  }, ); 

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map(dentista => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
          />
        ))}
      </div>
    </main>
  )
}

export default Home