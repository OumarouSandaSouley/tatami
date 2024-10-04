import React from 'react'
import AnimeContainer from '../components/AnimeContainer';

const AllAnimeEntries = () => {
  return (
    <section className="w-full py-16">
      <h3 className="text-3xl font-bold mb-3">Supported anime list</h3>
      <p className="text-lg leading-normal mb-4">
        Here is the list of the 500+ supported animes by{" "}
        <span className="text-primary font-kameron">Tatami</span>
      </p>
      <p className="mb-4 text-lg">Click on anyone to see quotes related to the anime.</p>
      <AnimeContainer limit={8} type="all" />
    </section>
  );
}

export default AllAnimeEntries