import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    padding: 20px;
    background-color: #313e45;
`;

const CiudadNoEncontrada = () => {
    return (
        <Contenedor>
            <h4 className="center-align ciudad">Ciudad no encontrada <i class="fas fa-window-close"></i></h4>
        </Contenedor>
    )
}

export default CiudadNoEncontrada
