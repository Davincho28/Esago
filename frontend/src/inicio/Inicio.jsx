import React, { useEffect, useState } from 'react'
import { Tabla } from './Componentes/Tabla';

export const Inicio = () => {
    const [data, setData] = useState([]);

    const datafind = (e) => {
        setData(e);
    }

    const buscardata = () => {
        google.script.run
            .withSuccessHandler(datafind)
            .DatosForm()
    }

    useEffect(() => {
        buscardata();
    }, [])

    return (
        <div>
            <Tabla props={{ data }} />
        </div>
    )
}
