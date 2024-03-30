import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (formData.fullName.length <= 5) {
      errors.fullName = 'El nombre completo debe tener más de 5 caracteres';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'El formato del email es incorrecto';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      console.log('Datos enviados:', formData);
      setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos lo antes posible vía mail.`);
      setFormData({ fullName: '', email: '' });
      setErrors({});
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Form;
