import React from 'react';
import Ruleta from './components/Ruleta'; 
import Header from './components/Header'; // Asegúrate de tener la ruta correcta al archivo Header.jsx

function App() {
    return (
        <div className="App">
            <Header />
            <Ruleta />
        </div>
    );
}

export default App;
