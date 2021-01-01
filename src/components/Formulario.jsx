import React, { useState } from 'react';
import AlertaError from './AlertaError';
import Spinner from '../components/Spinner/Spinner';

const Formulario = ({ datos, setDatos, setConsultar, cargando, setCargando }) => {

    const [ error, setError ] = useState(false);

    const { ciudad, pais } = datos;

    //Función que coloca los elementos en el state
    const handleChange = (e) => {

        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(ciudad.trim() === '' || pais.trim()=== ''){
            setError(true);
            return;
        }

        setError(false);
        setConsultar(true);
        setCargando(true);
    }

    return (
        <form className="formulario" autoComplete="off">
            <div className="input-field col s12">
                <select name="pais" value={pais} onChange={handleChange}>
                    <option value="" disabled defaultValue>Elija un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <div className="input-field col s6">
                <input placeholder="Ciudad" type="text" autoComplete="false" name="ciudad" value={ciudad} onChange={handleChange} className="validate"></input>
            </div>
            <div className="center-align mt-4">
                <button className="btn waves-effect waves-light" onClick={handleSubmit} type="submit">Buscar Clima
                    <i className="material-icons right"></i>
                </button>
                { cargando ? <Spinner /> : null }
            </div>

            {error ? <AlertaError />: null}
        </form>
    )
}

export default Formulario
