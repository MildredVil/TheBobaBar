import React, { useState, useRef } from 'react';

function Ruleta() {
    const [premio, setPremio] = useState("Haz clic en lanzar");
    const [rotation, setRotation] = useState(0);
    const [situacion, setSituacion] = useState(0); // 0: no ha lanzado, 1: lanzando, 2: ha lanzado
    const barraRef = useRef(null);

    const lanzar = () => {
        if (situacion === 0 && barraRef.current) {
            barraRef.current.classList.toggle('parate');
            const nuevaRotacion = Math.floor(Math.random() * 210) + 340;
            setPremio(".....suerte.....");
            setRotation(rotation + nuevaRotacion);
            setSituacion(1);
        }
    };

    const final = () => {
        setSituacion(2);

        const grados = (rotation % 360 + 360) % 360;
        if ((grados >= 0 && grados < 44) || (grados >= 180 && grados < 224)) {
            setPremio("Sabor de Vainilla");
        } else if (grados >= 44 && grados < 91) {
            setPremio("Sabor de Chocolate");
        } else if (grados >= 91 && grados < 135) {
            setPremio("Sabor de Fresa");
        } else if (grados >= 136 && grados < 179) {
            setPremio("Sabor de Menta");
        } else if (grados >= 224 && grados < 270) {
            setPremio("Sabor de Limón");
        } else if (grados >= 270 && grados < 314) {
            setPremio("Sabor de Coco");
        } else if (grados >= 315 && grados < 359) {
            setPremio("Sabor de Fresa con Crema");
        }
    };

    return (
        <>
            <div className="plafon">
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
                    <button className="lanzar" onClick={lanzar} disabled={situacion !== 0} style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#1d2478', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>lanzar</button>
                </div>
            </div>
            <div className="imagen-central-container">
                <img src="./assets/center.png" alt="Imagen Central" className="imagen-central" />
            </div>
        </>
    );
}

export default Ruleta;
