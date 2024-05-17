import { useState } from "react";
import Weather from "./components/Weather";
import IncorrectCity from "./components/IncorrectCity"

const API_KEY = '04dbde3a11efca9c07fbc6bc5fd4e2c4';

export function App() {

  const [currentCity, setCurrentCity] = useState({cod: 404})
  const [searchInput, setSearchInput] = useState('');
  const [errorCity, setErrorCity] = useState(false);
  var timeOut;

  
  function getWeather( city ) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&units=metric&lang=ua&appid=${API_KEY}`)
      .then( res => res.json() )
      .then(data => { 
        if (data.cod == 404 || data.cod == 400) {
          clearTimeout(timeOut);
          setErrorCity(true);
          timeOut = setTimeout(() => {
            setErrorCity(false)
          }, 2000);
        } else {
          setCurrentCity(data);
          setErrorCity(false);
        }
      })
  };

  return (
    <>
      <header>
        <div>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" >
            <path d="M240-192q-80 0-136-56T48-384q0-76 52-131.5T227-576q23-85 92.5-138.5T480-768q103 0 179 69.5T744-528q70 0 119 49t49 119q0 70-49 119t-119 49H240Zm0-72h504q40 0 68-28t28-68q0-40-28-68t-68-28h-66l-6-65q-7-74-62-124.5T480-696q-64 0-115 38.5T297-556l-14 49-51 3q-48 3-80 37.5T120-384q0 50 35 85t85 35Zm240-216Z"/>
          </svg>
          </span>
          <input 
            type="text" 
            placeholder="Пошук міста" 
            onChange={(e) => setSearchInput(e.target.value)}/>
          <button onClick={() => getWeather(searchInput)}>Пошук</button>
        </div>
        <IncorrectCity state={ errorCity } />
      </header>
      <article>
        {(currentCity.cod != 404) ? <button id="reload" onClick={() => getWeather(currentCity.name)}>Оновити</button> : ''}
        <Weather json={ currentCity }/>
      </article>
    </>
  )
}