import { useEffect, useState } from "react";
import ListImg from "./Components/ListImg";
import SearchBar from "./Components/SearchBar";
import axios from "axios";
require("dotenv").config();

function App() {
  const [unsplash, setUnsplash] = useState([]);
  const [unsplahInput, setUnsplahInput] = useState("");
  const [unsplahInputUp, setUnsplahInputUp] = useState("party");

  useEffect(() => {
    const searchUnsplash = async () => {
      const searchData = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${unsplahInputUp}&client_id=${process.env.REACT_APP_API_KEY}`
      );
      setUnsplash(searchData.data.results);
    };
 
    searchUnsplash();
  }, [unsplahInputUp]);

  const unsplahChange = (e) => {
    setUnsplahInput(e.target.value.trim());
  }; 

  const unsplahUp = (e) => {
    if (e.key === "Enter") {
      setUnsplahInputUp(unsplahInput);
    }
  };

  return (
    <div className="container mx-auto bg-gray-200 min-h-screen ">
      <SearchBar
        unsplahChange={unsplahChange}
        unsplahInput={unsplahInput}
        unsplahUp={unsplahUp}
      />
      <ListImg unsplash={unsplash} />
    </div>
  );
}

export default App;
