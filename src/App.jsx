import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";

function App() {

  const [idPelicula, setIdPelicula] = useState(Math.floor(Math.random() * 1000));
  const [nombrePelicula, setNombrePelicula] = useState()
  const [añoPelicula, setAñoPelicula] = useState()
  const [poster, setPoster] = useState();
  const [director, setDirector] = useState();

  const apiKey = 'f85740675b893e4366c4b3f185f92444';

  const url = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${apiKey}`
  const url2= `https://api.themoviedb.org/3/movie/${idPelicula}/credits?api_key=${apiKey}`
  const url3 = `https://api.themoviedb.org/3/movie/${idPelicula}/images?api_key=${apiKey}`
  const url4 = `https://api.themoviedb.org/3/movie/${idPelicula}/alternative_titles?api_key=${apiKey}`

  const generarId = () => {
    setIdPelicula(Math.floor(Math.random() * 1000))
  }

  const fetchApi = async () => {
    let respuesta = await fetch(url);
    let respuestaJSON = await respuesta.json();
    let respuesta2 = await fetch(url2);
    let respuestaDirector = await respuesta2.json();
    let respuesta3 = await fetch(url3);
    let respuestaImagen = await respuesta3.json()
    if(respuestaJSON.popularity < 15 || respuestaJSON.status_code == 34){
      generarId()
    }
    setNombrePelicula(respuestaJSON.original_title)
    setAñoPelicula(respuestaJSON.release_date)
    setPoster("https://image.tmdb.org/t/p/original/" + respuestaImagen.backdrops[2].file_path)
    let directorResults = respuestaDirector.crew.filter(item => item.hasOwnProperty('job') && item.job === 'Director');
    setDirector(directorResults[0].name)
  }


  useEffect(() => {
    fetchApi()
  }, [generarId]);

  return (
    <div className="h-[100vh] text-white bg-[url('/archivos/collage.png')] bg-no-repeat bg-auto bg-[#000123] bg-left"
    style={{
      backgroundPositionX: "-400px"
    }}>
    <Navbar/>
    <Main director={director} añoPelicula={añoPelicula} nombrePelicula={nombrePelicula} poster={poster} generarId={generarId} />
    <Footer />
    </div>
  );
}

export default App;
