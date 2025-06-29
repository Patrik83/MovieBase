import { useNavigate } from "react-router";
import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate(`/search?query=${inputValue}&page=1`);
  }

  return (
    <div>
      <form 
        onSubmit={handleSubmit}
        className="flex flex-row items-stretch gap-2 w-full pt-2 pe-4"
      >
        <input 
          type="text" 
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          className="shadow appearance-none border rounded w-sm py-2 px-3 text-gray-700"
        />
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Search</button>
      </form>
    </div>
  )
}

export default Search;