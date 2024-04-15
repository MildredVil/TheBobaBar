import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
      <div style={{ display: 'inline-block', width: '33%', textAlign: 'left' }}>
        <h3>Horario</h3>
        <p>Lunes: 11:00 AM - 8:00 PM</p>
        <p>Martes: 11:00 AM - 8:00 PM</p>
        <p>Miercoles: 11:00 AM - 8:00 PM</p>
        <p>Jueves: 11:00 AM - 8:00 PM</p>
        <p>Viernes: 11:00 AM - 8:00 PM</p>
        <p>Sabado: 11:00 AM - 8:00 PM</p>
        <p>Domingo: 11:00 AM - 8:00 PM</p>
      </div>
      <div style={{ display: 'inline-block', width: '33%', textAlign: 'left' }}>
        <h3>Ubicación</h3>
        <p>Av Juan Escutia #1102 Chihuahua, Chuhuahua</p>
      </div>
      <div style={{ display: 'inline-block', width: '33%', textAlign: 'left' }}>
        <h3>Ordenar</h3>
        {/* Agrega aquí un enlace a tu sistema de pedidos si tienes uno */}
      </div>
    </footer>
  );
}

export default Footer;
