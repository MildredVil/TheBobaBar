import React, { useState, useRef } from 'react';

function Ruleta() {
    const [ancho, setAncho] = useState(1);
    const [dinero, setDinero] = useState(1);
    const [tiradas, setTiradas] = useState(1);
    const [premio, setPremio] = useState("Haz clic en lanzar");
    const [rotation, setRotation] = useState(0);
    const [situacion, setSituacion] = useState(0); // 0: no ha lanzado, 1: lanzando, 2: ha lanzado
    const barraRef = useRef(null);

    const lanzar = () => {
        setTiradas(tiradas - 1);
        if (barraRef.current) {
            barraRef.current.classList.toggle('parate');
            const width2 = barraRef.current.getBoundingClientRect().width;
            setAncho(width2);
            girar();
            setSituacion(1);
        }
    };

    const girar = () => {
        const nuevaRotacion = Math.floor(Math.random() * 210) + 340;
        setPremio(".....suerte.....");
        setRotation(rotation + ancho + nuevaRotacion);
    };

    const final = () => {
        setSituacion(0);

        const grados = (rotation % 360 + 360) % 360;
        if ((grados >= 0 && grados < 44) || (grados >= 180 && grados < 224)) {
            setPremio("Piñidka");
            setDinero(0);
            setSituacion(2);
        } else if (grados >= 44 && grados < 91) {
            setPremio("Piña");
            setDinero(dinero + 1);
            setTiradas(tiradas + 1);
        } else if (grados >= 91 && grados < 135) {
            setDinero(dinero * 2);
            setPremio("Lychee");
            setSituacion(2);

        } else if (grados >= 136 && grados < 179) {
            setPremio("mango");
            setDinero(dinero + 8);
            setTiradas(tiradas + 1);
        } else if (grados >= 224 && grados < 270) {
            setPremio("Chocolate");
            setDinero(dinero + 5);
            setTiradas(tiradas + 1);
        } else if (grados >= 270 && grados < 314) {
            setPremio("idk");
            setDinero(dinero * 3);
            setSituacion(2);
        } else if (grados >= 315 && grados < 359) {
            setPremio("Kiwi");
            setDinero(dinero + 2);
            setTiradas(tiradas + 1);
        }
    };

    return (
        <>
            <div className="monedas">
                {Array.from({ length: dinero }, (_, index) =>
                    <img key={index} src="./assets/moneda.png" alt="" />
                )}
            </div>
            <div className="tiradas">
                {Array.from({ length: tiradas }, (_, index) =>
                    <img key={index} src="./assets/ticket.png" alt="" />
                )}
            </div>
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
                    {tiradas > 0 && <button className="lanzar" onClick={lanzar} style={{ padding: '10px 20px', fontSize: '18px', backgroundColor: '#1d2478', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>lanzar</button>}
                </div>
                {situacion === 2 && <h1>No te quedan mas tiradas.Has ganado ${dinero} monedas</h1>}
                <div className="central">
                    <img src="./assets/center.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Ruleta;
