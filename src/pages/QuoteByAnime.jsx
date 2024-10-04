import React from 'react'
import { useParams } from 'react-router-dom'
import QuotesContainer from '../components/QuotesContainer'

const QuoteByAnime = () => {
    const {anime} = useParams()
    const decodedAnime = decodeURIComponent(anime);
  return (
    <section className="py-16 w-full">
      <h3 className="text-3xl font-bold">
        Quotes related to the anime:{" "}
        <span className="text-primary font-kameron">{anime} </span>
      </h3>
      <QuotesContainer anime={decodedAnime} />
    </section>
  );
}

export default QuoteByAnime