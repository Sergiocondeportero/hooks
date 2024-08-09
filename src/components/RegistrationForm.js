
import React,{useState}  from 'react';


export default function RegistrationForm(){
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
  
    const mostrarDato = (dato) => {
      alert(dato);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      mostrarDato(`Nombre de Usuario: ${nombreUsuario}\n Correo Electrónico: ${correoElectronico}`);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de Usuario:</label>
            <input 
              type="text" 
              value={nombreUsuario} 
              onChange={(e) => setNombreUsuario(e.target.value)} 
            />
          </div>
          <div>
            <label>Correo Electrónico:</label>
            <input 
              type="email" 
              value={correoElectronico} 
              onChange={(e) => setCorreoElectronico(e.target.value)} 
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
  
        <div>
          <h3>Valores Actuales:</h3>
          <p>Nombre de Usuario: {nombreUsuario}</p>
          <p>Correo Electrónico: {correoElectronico}</p>
        </div>
      </div>
    );
};

/*Crea un componente funcional llamado RegistrationForm que:

Inicialice el estado para dos campos de entrada: "nombre de usuario" y "correo electrónico", ambos comenzando como cadenas vacías.
Muestre los valores actuales de "nombre de usuario" y "correo electrónico" debajo del formulario en tiempo real.
Tenga un formulario con dos campos de entrada y un botón de envío.

Actualice el estado correspondiente cada vez que el usuario escriba en uno de los campos de entrada.
*/
