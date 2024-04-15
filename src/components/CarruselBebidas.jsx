import React from 'react';
import Slider from 'react-slick';

// Estilos CSS para el carrusel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Datos de ejemplo de bebidas
const bebidas = [
    { id: 1, nombre: 'Té de burbujas', imagen: './assets/te_burbujas.jpg' },
    { id: 2, nombre: 'Café con leche', imagen: './assets/cafe_con_leche.jpg' },
    { id: 3, nombre: 'Té verde', imagen: './assets/te_verde.jpg' },
    { id: 4, nombre: 'Té de frutas', imagen: './assets/te_frutas.jpg' },
    { id: 5, nombre: 'Café negro', imagen: './assets/cafe_negro.jpg' },
];

const CarruselBebidas = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div>
            <h2>Bebidas Más Vendidas</h2>
            <Slider {...settings}>
                {bebidas.map((bebida) => (
                    <div key={bebida.id}>
                        <img src={bebida.imagen} alt={bebida.nombre} />
                        <p>{bebida.nombre}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarruselBebidas;
