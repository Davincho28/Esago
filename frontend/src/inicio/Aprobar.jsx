import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

export const Aprobar = () => {
    const { numident } = useParams()
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipcc, setTipcc] = useState("");
    const [cc, setCc] = useState("");
    const [aprobacion, setAprobacion] = useState("");


    const datafind = (data) => {
        const array = data.split(",")
        setNombre(array[0]);
        setCorreo(array[1]);
        setTipcc(array[3])
        setCc(array[4]);
    }

    const enviarresp = (e) => {
        e.preventDefault();
        const formulario = e.target;
        const select = formulario.selector;
        const descripcion = formulario.description.value;
        const boton = formulario.enviar;
        boton.disabled = true;
        select.disabled = true;
        google.script.run
            .withSuccessHandler(redirecciona)
            .aprobando((select.value), descripcion, numident)
    }

    const redirecciona = (message) => {
        alert(message)
    }



    const buscainfo = () => {
        google.script.run
            .withSuccessHandler(datafind)
            .buscarnumiden(numident)
    }

    useEffect(() => {
        buscainfo();
    }, [])

    return (
        <div>
            <div>
                <br />
                <Link to="/"><button className='btn btn-success'>Ir a inicio</button></Link>
            </div>

            <div className='text-center'>
                <h2>{aprobacion}</h2>
                <h2>Aprobar</h2>
                <h3>Hola estas viendo el perfil de: {nombre} </h3>
                <h3>El correo es: {correo}</h3>
                <h3>Tiene {tipcc} y el numero es {cc}</h3>
                <hr />
            </div>

            <div className='col-auto text-center'>
                <form onSubmit={enviarresp}>
                    <div className='container col-md-12'>
                        <h2>Deseas Aprobar esta solicitud?</h2>
                        <div className='col-md-12'>
                            <label>Descripcion:</label>
                            <br />
                            <textarea cols="30" rows="5" required id="description" />
                        </div>
                        <div className='col-md-12'>
                            <select className='form-select' id='selector'>
                                <option value="SI">SI</option>
                                <option value="NO">NO</option>
                            </select>
                            <input type="submit" value="Enviar" id='enviar' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
