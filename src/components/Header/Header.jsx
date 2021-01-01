import React from 'react';
import styled from '@emotion/styled';

const Titulo = styled.h2`
    text-align: center;
    margin-bottom: 2rem;
`;

const Header = ({ titulo }) => {
    return (
        <Titulo>
            {titulo}
        </Titulo>
    )
}

export default Header
