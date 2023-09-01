import { Cloud, CloudSun, Sun } from '@phosphor-icons/react';
import { useState, ChangeEvent } from 'react';
import { Temperature } from './Temperature';
import { optionTypes } from '../types/optionTypes';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Search } from './Search';

const API_KEY = 'dccd1671d9d79e2f6838067990814719'

export function Modal() {
  const [handleIcon, setHandleIcon] = useState(0);
  const [city, setCity] = useState<string>('')
  const [dataAPI, setDataAPI] = useState<optionTypes | null>(null);

  function handleIconFn() {
    for (let i = 0; i < 3; i++) {
      setHandleIcon(handleIcon + 1);

      if (handleIcon === 2) {
        setHandleIcon(0);
      }
    }
  }

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCity(value);
  }

  async function getSearchCity() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&mode=json&lang=pt_br&units=metric&appid=${API_KEY}`);
    const data = await res.json();

    if(res.status === 400) {
      toast.error('City not found 😢');
      return;
    } if(res.status === 404) {
      toast.error('Search empty, please try again 😢');
      return;
    } else {
      setDataAPI(data);
    }
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <ToastContainer />
      <div className={`h-auto w-auto px-5 bg-gradient-to-bl bg-blue-950 rounded-lg text-black flex flex-col items-center
        ${dataAPI && dataAPI.main.temp < 20 ? 'from-blue-900 to-cyan-200' : null}
        ${dataAPI && dataAPI.main.temp > 20 ? 'from-blue-950 to-blue-700' : null}
        ${dataAPI && dataAPI.main.temp > 30 ? 'from-orange-600 to-amber-400' : null}
      `}>
        <div className="my-10">
          <div className="flex items-center justify-center gap-5 w-full ">
            <h1 className="text-3xl font-bold text-white">Weather App</h1>
            <span
              className='flex items-center justify-center w-12 h-12 rounded-full bg-zinc-300 bg-opacity-60 shadow-lg hover:scale-105 ease-in-out duration-500 cursor-pointer'
              onClick={handleIconFn}
            >
              {handleIcon === 0 ? <CloudSun size={32} color='#fff' weight="fill"/> : null}
              {handleIcon === 1 ? <Cloud size={32} color='#fff' weight="fill"/> : null}
              {handleIcon === 2 ? <Sun size={32} color='#fff' weight="fill"/> : null}
            </span>
          </div>
            <Search onInputChange={onInputChange} getSearchCity={getSearchCity}/>
            {dataAPI && city ? <Temperature showName={dataAPI.name} temp={dataAPI.main.temp} country={dataAPI.sys.country.toLowerCase()} weatherIcon={dataAPI.weather[0].icon} weatherDescription={dataAPI.weather[0].description} humidity={dataAPI.main.humidity} windSpeed={dataAPI.wind.speed}/> : null}
        </div>
      </div>
    </div>
  );
}
