import { MagnifyingGlass } from "@phosphor-icons/react";

interface ISearch {
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  getSearchCity: React.MouseEventHandler<HTMLButtonElement>;
}

export function Search({ onInputChange, getSearchCity}: ISearch) {

  return (
    <div className='relative w-full flex h-16 px-5 rounded-lg bg-opacity-40 justify-center items-center gap-3 my-5'>
      <input onChange={onInputChange}  type="text" placeholder='New York - EUA' className='p-2 w-60 rounded-full bg-zinc-100 placeholder:text-zinc-600 text-center focus:outline-zinc-400'/>
      <button onClick={getSearchCity} className='h-10 w-10 flex justify-center items-center bg-zinc-100 rounded-full shadow-lg'>
        <MagnifyingGlass size={25}/>
      </button>
    </div>
  );
}
