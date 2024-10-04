import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchAnimeCharacter = () => {
  const [character, setCharacter] = useState("Madara");
  return (
    <section className="w-full py-8 mb-8">
      <p className="text-lg mb-3 text-center">Search anime character name:</p>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-4 border border-[#ccc] w-fit px-4 rounded-md">
          <input
            type="text"
            className="max-w-[600px] py-4 px-3 bg-transparent border-none text-white outline-none w-full"
            placeholder="ex: Madara"
            onChange={(e) => setCharacter(e.target.value)}
          />
          <Link to={`/quotebycharacter/${character}`}>
            <Search className="size-8 cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SearchAnimeCharacter;
