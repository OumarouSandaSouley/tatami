import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import QuotesContainer from "../components/QuotesContainer";
import { fetchAnimeByCharacterName } from "../api";

const QuoteByAnime = () => {
  const { character } = useParams();
  const decodedCharacter = decodeURIComponent(character);
  useEffect(() => {
    fetchAnimeByCharacterName(decodedCharacter);
  }, [])
  
  return (
    <section className="py-16 w-full">
      <h3 className="text-3xl font-bold">
        Quotes related to the character:{" "}
        <span className="text-primary font-kameron">{decodedCharacter} </span>
      </h3>
      <QuotesContainer anime={decodedCharacter} type="character" />
    </section>
  );
};

export default QuoteByAnime;
