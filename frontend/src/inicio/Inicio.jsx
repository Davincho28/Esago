import React, { useEffect, useState } from 'react'
import { Tabla } from './Componentes/Tabla';

export const Inicio = () => {
    const [data, setData] = useState([]);
    const [actrange, setActrange] = useState("");

    const rango = () => {
        google.script.run
            .withSuccessHandler((e) => setActrange(e))
            .buscarrango()
    }


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
        rango();
    }, [])

    return (
        <div>
            <Tabla props={{ data, actrange }} />
        </div>
    )
}
