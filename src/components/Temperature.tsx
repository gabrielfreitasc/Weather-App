import { Wind } from '@phosphor-icons/react'
import { BsWater } from 'react-icons/bs'

interface propsAPI {
  showName: string;
  temp: number;
  country: string;
  weatherIcon: string;
  weatherDescription: string;
  humidity: number;
  windSpeed: number;
}


export function Temperature({showName, temp, country, weatherIcon, weatherDescription, humidity, windSpeed}: propsAPI) {

  return (
    <div className="flex flex-col justify-center items-center my-5 gap-2 text-white">
      <div className='text-amber-500 flex gap-3 items-center'>
      <p className='text-white font-semibold text-lg uppercase'>{weatherDescription}</p>
      <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} width={100} height={100} className='drop-shadow-lg hover:scale-105 ease-in-out duration-500'/>
      </div>
      <h1 className={`text-7xl font-extrabold mb-2`}>{Math.trunc(temp)}ºC</h1>
      <div className='flex justify-center gap-5'>
        <h2 className="text-5xl font-bold text-center">{showName}</h2>
        <img src={`https://flagcdn.com/${country}.svg`} width={48} className='mt-4 mr-2'/>
      </div>
      <div className='w-full flex justify-around my-8'>

        <div className='flex flex-col items-center p-2 rounded-lg bg-white bg-opacity-20'>
          <div className='flex items-center gap-3'>
            <BsWater size={32}/>
            <p className='text-center row-span-1 col-span-2'>Humidity</p>
          </div>
            <p className='text-3xl'>{humidity}%</p>
        </div>

        <div className='flex flex-col items-center p-2 rounded-lg bg-white bg-opacity-20'>
          <div className='flex items-center gap-3'>
            <Wind size={32}/>
            <p className='text-center row-span-1 col-span-2'>Wind Speed</p>
          </div>
            <p className='text-3xl'>{windSpeed} km/h</p>
        </div>

      </div>
    </div>
  );
}
