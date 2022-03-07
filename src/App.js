import { useEffect, useState } from "react"; //useEffect se llamará por unica vez al ejecutar la app
import './App.css';
import axios from 'axios';
import Trailer from './components/Trailer';
import ImgPlot from './components/ImgPlot';
import MovieData from './components/MovieData';
import NavBar from './components/NavBar'

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res= await axios.get('https://imdb-api.com/es/API/Title/k_mz7bv7bz/tt10872600/FullActor,FullCast,Posters,Images,Trailer,');
    console.log(res.data);
    setData(res.data);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="App">
       <NavBar />
       <ImgPlot img={data.image}/>
       <Trailer trailer={data.trailer}/>
       <MovieData title={data.title} rating={data.imDbRating} plot={data.plot} director={data.directors} actors={data.stars}/>
    </div>
  );
}

export default App;
