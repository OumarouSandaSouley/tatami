import React, { useEffect, useState } from "react";
import { fetchAnimeByAnimeName, fetchAnimeByCharacterName } from "../api";
import QuoteCard from "./QuoteCard";

const QuotesContainer = ({ anime, type }) => {
  const [quotes, setQuotes] = useState([]);

  const fetchData = async (anime) => {
    try {
      if (type == "character") {        
        const result = await fetchAnimeByCharacterName(anime);
        setQuotes(result);
      } else {
        const result = await fetchAnimeByAnimeName(anime);
        setQuotes(result);
      }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(anime);
  }, [anime]);

  if (!quotes.length) {
    return <p>No quotes found.</p>; // or a loading spinner
  }

  return (
    <div className="w-full py-8">
      <p className="text-lg mb-3">{quotes.length} quotes found </p>
      <div className="w-full grid sm:grid-cols-3 gap-8 items-center">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} d={quote} anime={anime} character={anime}  type={type}/>
        ))}
      </div>
    </div>
  );
};

export default QuotesContainer;
