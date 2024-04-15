import React, { useState, useRef } from 'react';

function Ruleta() {
    const [premio, setPremio] = useState("Haz clic en lanzar");
    const [rotation, setRotation] = useState(0);
    const [situacion, setSituacion] = useState(0); // 0: no ha lanzado, 1: lanzando, 2: ha lanzado
    const [carrito, setCarrito] = useState([]);
    const [ordenado, setOrdenado] = useState(false);
    const barraRef = useRef(null);

    const lanzar = () => {
        if (situacion === 0 && barraRef.current) {
            barraRef.current.classList.toggle('parate');
            const nuevaRotacion = Math.floor(Math.random() * 210) + 340;
            setPremio(".....Delicious.....");
            setRotation(rotation + nuevaRotacion);
            setSituacion(1);
        }
    };

    const final = () => {
        setSituacion(2);

        const grados = (rotation % 360 + 360) % 360;
        let premioActual = "";
        if ((grados >= 0 && grados < 44) || (grados >= 180 && grados < 224)) {
            premioActual = "Sabor piña";
        } else if (grados >= 44 && grados < 91) {
            premioActual = "Sabor de Chocolate";
        } else if (grados >= 91 && grados < 135) {
            premioActual = "Sabor lychee";
        } else if (grados >= 136 && grados < 179) {
            premioActual = "Sabor mango";
        } else if (grados >= 224 && grados < 270) {
            premioActual = "Sabor fresa";
        } else if (grados >= 270 && grados < 314) {
            premioActual = "Sabor chocolate";
        } else if (grados >= 315 && grados < 359) {
            premioActual = "Sabor kiwi";
        }

        setPremio(premioActual);
        setCarrito([...carrito, premioActual]);
    };

    const handleOrdenarYa = () => {
        setOrdenado(true);
    };

    const resetRuleta = () => {
        setRotation(0);
        setSituacion(0);
        setPremio("Haz clic en lanzar");
        setCarrito([]);
        setOrdenado(false);
    };

    return (
        <>
            <div className={`plafon ${ordenado ? 'plafon-ordenado' : ''}`}>
                <div
                    className="ruleta"
                    style={{
                        backgroundImage: `url('./assets/Ruleta_boba.png')`,
                        transform: `rotate(${rotation}deg)`,
                        transition: "transform 6s cubic-bezier(0.2, 0.8, 0.7, 0.99) 0s",
                    }}
                    onTransitionEnd={final}>
                </div>
                <div className="premio">{premio}</div>
                {situacion === 0 &&
                    <div className="barra1">
                        <div className="mi_barra" ref={barraRef}></div>
                    </div>
                }
                <div className="barrainferior">
                    {ordenado ? (
                        <div className="ordenar-ya">Recoge en caja</div>
                    ) : (
                        <button className="lanzar" onClick={lanzar} disabled={situacion !== 0} style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#1d2478', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>lanzar</button>
                    )}
                    <br></br><button className="ordenar-ya-btn" onClick={handleOrdenarYa} disabled={ordenado} style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#1d2478', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Ordenar ya</button>
                    <br></br>{ordenado && <button className="pedido-nuevo-btn" onClick={resetRuleta} style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#1d2478', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Pedido Nuevo</button>}
                </div>
            </div>
            <div className="imagen-central-container">
                <img src="./assets/center.png" alt="Imagen Central" className="imagen-central" />
            </div>
            <div className="carrito">
                <h3>Carrito:</h3>
                <ul>
                    {carrito.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Ruleta;
