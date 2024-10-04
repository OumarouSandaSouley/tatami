import React from "react";
import AnimeContainer from "../components/AnimeContainer";
import { Link } from "react-router-dom";

const AnimeList = () => {
  return (
    <section className="pb-8 w-full">
      <h4 className="text-3xl capitalize font-bold">
        Explore supported anime list
      </h4>
      <Link
        to="/animelist"
        className="mt-4 text-lg underline hover:text-primary capitalize"
      >
        See all anime list
      </Link>
      <AnimeContainer limit={8} type="limit" />
    </section>
  );
};

export default AnimeList;
