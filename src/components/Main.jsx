import React, { useEffect, useState } from 'react'

export const Main = ({ director, añoPelicula, nombrePelicula, poster, generarId }) => {
    const [texto, setTexto] = useState("");
    const [puntos, setPuntos] = useState(0);
    const [mostrarA, setMostrarA] = useState(true);
    const [mostrarB, setMostrarB] = useState(false);
    const [mostrarC, setMostrarC] = useState(false);
    const [sumatoriaClick, setSumatoriaClick] = useState(1)
    const [respuestaCorrecta, setRespuestaCorrecta] = useState("")

    const esteTexto = (evento) => {
        let respuestaUser = evento.target.value;
        setTexto(respuestaUser.toLowerCase().replace(/ /g, ""))
    }

    const cambiarPregunta = () => {
        setSumatoriaClick(sumatoriaClick + 1)
        sistemaPuntaje()
        if (sumatoriaClick == 0) {
            setMostrarA(true)
            setMostrarB(false)
            setMostrarC(false)
        } else if (sumatoriaClick == 1) {
            setMostrarA(false)
            setMostrarB(true)
        } else if (sumatoriaClick == 2) {
            setMostrarA(false)
            setMostrarB(false)
            setMostrarC(true)
        }
        else if (sumatoriaClick == 3) {
            setSumatoriaClick(1)
            setMostrarA(true)
            setMostrarB(false)
            setMostrarC(false)
        }

    }

    const sistemaPuntaje = () => {
        if (mostrarA) {
            if (nombrePelicula.toLowerCase().replace(/ /g, "").includes(texto.toLowerCase().replace(/ /g, ""))) {
                setPuntos(puntos + 10)
                setRespuestaCorrecta("")
            } else {
                setRespuestaCorrecta(nombrePelicula)
            }
        } else if (mostrarB) {
            if (añoPelicula.slice(0,4) == texto.slice(0,4)) {
                setPuntos(puntos + 10)
                setRespuestaCorrecta("")
            } else {
                setRespuestaCorrecta(añoPelicula.slice(0,4))
            }
        } else if (mostrarC) {
            if (director.toLowerCase().replace(/ /g, "") == texto.toLowerCase().replace(/ /g, "")) {
                setPuntos(puntos + 10)
                setRespuestaCorrecta("")
            } else {
                setRespuestaCorrecta(director)
            }
        }
    }

    const siguientePelicula = ()=>{
        setRespuestaCorrecta("")
        generarId()
        setMostrarA(true)
        setMostrarB(false)
        setMostrarC(false)
        setSumatoriaClick(1)
    }

    const resetear = ()=>{
        setPuntos(0)
        setMostrarA(true)
        setMostrarB(false)
        setMostrarC(false)
        setTexto("")
        setRespuestaCorrecta("")
        generarId()
        setSumatoriaClick(1)
    }


    return (
        <div className='h-[707px] max-lg:h-[100vh] flex flex-col items-center'>
            <div className='flex  max-lg:items-center max-lg:flex-col-reverse justify-around w-full h-full'>
                <div className=' flex items-center'>
                    <div className={`flex flex-col ${mostrarA ? "" : "hidden"} items-center max-lg:h-72 h-96 justify-between `}>
                        <div className='flex flex-col items-center mt-16'>
                            <h3 className='py-6 text-2xl font-subtitulo shadow-xl shadow-black'>Nombre de la Pelicula</h3>
                            <input className='text-black p-2 w-80 outline-none rounded-md text-md shadow-2xl shadow-black' onChange={esteTexto} />
                            <h3
                            className='font-subtitulo mt-6'
                            >{respuestaCorrecta}</h3>
                        </div>
                        <div className=''>
                            <button
                                className='bg-[#000123] mt-3 font-semibold w-52 font-titulo px-6 py-3 rounded-full border-2 shadow-2xl shadow-black'
                                onClick={() => { cambiarPregunta() }}>Enviar</button>
                        </div>
                    </div>
                    <div className={`flex flex-col ${mostrarB ? "" : "hidden"} items-center max-lg:h-72 h-96 justify-between `}>
                        <div className='flex flex-col items-center mt-16'>
                            <h3 className='py-6 text-2xl font-subtitulo shadow-xl shadow-black'>Año de la Pelicula</h3>
                            <input className='text-black p-2 w-80 outline-none rounded-md text-md shadow-2xl shadow-black' onChange={esteTexto} />
                            <h3
                            className='font-subtitulo mt-6'>{respuestaCorrecta}</h3>
                        </div>
                        <div className=''>
                            <button
                                className='bg-[#000123] mt-3 font-semibold w-52 font-titulo px-6 py-3 rounded-full border-2 shadow-2xl shadow-black'
                                onClick={() => { cambiarPregunta() }}>Enviar</button>
                        </div>
                    </div>
                    <div className={`flex flex-col ${mostrarC ? "" : "hidden"} items-center max-lg:h-72 h-96 justify-between `}>
                        <div className='flex flex-col items-center mt-16'>
                            <h3 className='py-6 text-2xl font-subtitulo shadow-xl shadow-black'>Director de la Pelicula</h3>
                            <input className='text-black p-2 w-80 outline-none rounded-md text-md shadow-2xl shadow-black' onChange={esteTexto} />
                            <h3
                            className='font-subtitulo mt-6'>{respuestaCorrecta}</h3>
                        </div>
                        <div className=''>
                            <button
                                className='bg-[#000123] mt-3 font-semibold w-52 font-titulo px-6 py-3 rounded-full border-2 shadow-2xl shadow-black'
                                onClick={() => { cambiarPregunta() }}>Enviar</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={poster && poster} className="w-22 max-lg:w-22 max-lg:h-52 h-72 shadow-xl shadow-black rounded-xl" />
                    <div className='flex gap-10 mt-10 max-lg:flex-col'>
                        <button
                            className='bg-[#000123] font-semibold w-52 font-titulo px-6 py-3 rounded-full border-2 shadow-2xl shadow-black'
                            onClick={() => { siguientePelicula() }}>Siguiente</button>
                        <button
                            className='bg-[#000123] font-semibold w-52 font-titulo px-6 py-3 rounded-full border-2 shadow-2xl shadow-black'
                            onClick={() => { resetear() }}>Reset</button>
                    </div>
                </div>
            </div>
            <div className='font-titulo md:flex-col my-12 text-2xl font-bold shadow-xl items-center'>{puntos && puntos ? "Puntos: " + puntos : ""}</div>
        </div>
    )
}
