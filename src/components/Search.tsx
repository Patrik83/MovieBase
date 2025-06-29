import { useNavigate } from "react-router";
import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/search?query=" + inputValue);
  }

  return (
    <div className="px-4">
      <form onSubmit={handleSubmit}>
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