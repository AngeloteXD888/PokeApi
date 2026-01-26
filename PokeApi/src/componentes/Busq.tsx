import { useState } from "react";

interface BusqProps {
    value: string;
    placeholder: string;
}


const Busq = ({value, placeholder}: BusqProps) => {
    const [query, setQuery]  = useState(value);
    const handeleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }
    
  return (
    <div className="flex items-center gap-4">
        <input type="text"
        placeholder={placeholder}
        className=" bg-white border-black text-black px-8 py-2 rounded focus:outline-none"
        value={query}
        onChange={(event) => {
            handeleQuery
        }}
        ></input>
    </div>
  )
}

export default Busq