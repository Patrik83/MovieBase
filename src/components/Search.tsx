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
        className="flex gap-2 pe-0 pt-2 sm:pe-2"
      >
        <input 
          type="text" 
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
          className="border rounded sm:w-lg text-black bg-gray-300 focus:outline-none pl-2"
        />
        <button 
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        >Search</button>
      </form>
    </div>
  )
}

export default Search;