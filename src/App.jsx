import React from 'react';
import Ruleta from './components/Ruleta'; 
import Header from './components/Header'; 
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './App.css'; // Assuming you have an App.css file for styling
import InfiniteBanner from './components/InfiniteBanner';
import ShoppingCart from './components/ShoppingCart';

function App() {
    return (
        <div className="App-background">
            <Header/>
            <div className="image-text-container">
                <div className="image-container">
                    <img src="./public/assets/main.png" alt="Boba" className="right-aligned-image" />
                </div>
                <div className="text-container">
                    <h2>¡Llévate a casa el boba!</h2>
                    <p>Tu tienda de boba favorita ahora está abierta 24/7/365 en tu congelador. Con siete sabores y más por probar, y unas bolitas que siempre dan buen mordisco, pronto serás un experto en boba.</p>
                </div>
            </div>
            <InfiniteBanner/>
            <Ruleta/>
            <ShoppingCart/>
            <Footer/>
        </div>
    );
}

export default App;
