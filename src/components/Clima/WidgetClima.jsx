import React from 'react';
import styled from '@emotion/styled';
import { determinarClima } from '../helpers/determinarClima';

const DivisionHorizontal = styled.div`
  width: 100%;
  height: 3px;
  margin-top: -5px;
  background-color: #263238;
`;

const WidgetClima = ({ resultado }) => {

    let { name, main, wind, weather } = resultado;
    let temperatura, tempMinima, tempMaxima, viento, humedad, imagen;

    if(!name){
        temperatura = 0;
        return null;
    };

    const gradosKelvin = 273.15;
    temperatura = main.temp;
    tempMinima  = main.temp_min;
    tempMaxima  = main.temp_max;
    viento      = wind.speed;
    viento      = viento * 3.6.toFixed(2);
    humedad     = main.humidity;

    imagen = determinarClima(weather[0].main)

    return (
        <>
            <div className="top-left">
                <h1 className="city mb-3" id="city">{name}</h1>
                <h4 id="date">Mínima: {(tempMinima - gradosKelvin).toFixed(0)}<span>°C</span></h4>
                <h4 id="time">Máxima: {(tempMaxima - gradosKelvin).toFixed(0)}<span>°C</span></h4>
                <p className="geo"></p>
            </div>
            <div className="top-right">
                <img className="weather-icon" src={imagen} alt="estado_clima"></img>
            </div>
            <DivisionHorizontal></DivisionHorizontal>
            <div className="bottom-left">
                <p>Temperatura Actual </p>
                <h1 id="temperature">{ (temperatura - gradosKelvin).toFixed(0) }</h1>
                <h2 id="celsius">°C</h2>
            </div>
            <div className="bottom-right">
                <div className="other-details-key">
                <p>Velocidad del Viento: </p>
                <p>Humedad: </p>
                </div>
                <div className="other-details-values">
                <p className="windspeed">{viento.toFixed(1)} Km/h</p>
                <p className="humidity">{humedad.toFixed(1)} %</p>
                </div>
            </div>
        </>
    )
}

export default WidgetClima
