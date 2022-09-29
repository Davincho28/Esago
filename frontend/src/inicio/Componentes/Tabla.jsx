import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Tabla = ({ props }) => {
    const data = props.data;
    const aprobacion = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <div>
            <h2>Solicitudes:</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo Documento</th>
                        <th scope="col">Numero Documento</th>
                        <th scope="col">Area</th>
                        <th scope="col">Aprobado</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 &&
                        data.map((fila) => {
                            return (
                                <tr key={fila.NumDocumen}>
                                    <td>{fila.Nombre}</td>
                                    <td>{fila.TipDocumen}</td>
                                    <td>{fila.NumDocumen}</td>
                                    <td>{fila.DatoGestion}</td>
                                    {
                                        fila.Aprobado == "" &&
                                        <td>
                                            <Link to={"/aprobar/" + fila.NumDocumen}><button className='btn btn-success'>Aprobar</button></Link>
                                        </td>
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
