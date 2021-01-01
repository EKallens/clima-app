import React from 'react';
import styled from '@emotion/styled';

const Alerta = styled.div`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    margin-top: 2rem;
`;

const AlertaError = () => {
    return (
        <Alerta>Debes seleccionar ciudad y país!<i className="fas fa-exclamation-circle ml-1"></i></Alerta>
    )
}

export default AlertaError
