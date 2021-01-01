import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import WidgetClima from './components/Clima/WidgetClima';
import CiudadNoEncontrada from './components/Clima/CiudadNoEncontrada';

const Contenedor = styled.div`
  margin-top: 2rem;
`;

const ContenedorWidget = styled.div`
  width: 612px;
  max-width: 100%;
  height: 100%;
  display: block;
  background-color: #313e45;
  border-radius: 25px;
  margin: 0 auto;
`;

function App() {

  const [ datos, setDatos ] = useState({
    ciudad: '',
    pais: ''
  });

  const [ consultar, setConsultar ] = useState(false);
  const [ resultado, setResultado ] = useState({});
  const [ cargando, setCargando ] = useState(false);
  const [ ciudadNoEncontrada, setCiudadNoEncontrada ] = useState(false);

  const { ciudad, pais } = datos;

  useEffect(() => {

    const consultarApi = async() => {

      if(consultar){

        const appId = '5ba9f5b57217fa4005fdc1552dc528c7';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const res = await fetch(url);
        const data = await res.json();

        if(data.cod === '404'){
          setCiudadNoEncontrada(true);
          setCargando(false);
          setResultado(data);
          setConsultar(false);
          return;
        }
        
        console.log(data)

        setResultado(data);
        setConsultar(false);
        setCargando(false);
        setCiudadNoEncontrada(false);
      }

    }

    consultarApi();

  }, [consultar, ciudad, pais])

  return (

    <Contenedor>
      <Header titulo='Clima APP'/>
      <ContenedorWidget>
        <Formulario datos={datos} setDatos={setDatos} setConsultar={setConsultar} cargando={cargando} setCargando={setCargando}/>
        <WidgetClima resultado={resultado} />
        { ciudadNoEncontrada ? <CiudadNoEncontrada /> : null }
      </ContenedorWidget>
    </Contenedor>

  );
}

export default App;
