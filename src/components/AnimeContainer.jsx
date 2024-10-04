import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { fetchAnimeList } from "../api";

const AnimeContainer = ({ limit, type }) => {
  const [data, setData] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);
  const fetchData = async () => {
    const result = await fetchAnimeList();
    setData(result);
    console.log(result);
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setShuffledData(shuffleArray([...data]));
  }, [data]);

  if (type == "all") {
    return (
      <div className="w-full my-8 flex items-center">
        <div className="w-full gap-4 grid grid-cols-2 max-m:grid-cols-3 md:grid-cols-4">
          {data.map((d, index) => (
            <AnimeCard key={index} animeName={d} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="w-full my-8 flex items-center">
      <div className="w-full gap-4 grid grid-cols-2 max-m:grid-cols-3 md:grid-cols-4">
        {shuffledData.slice(0, limit).map((d, index) => (
          <AnimeCard key={index} animeName={d} />
        ))}
      </div>
    </div>
  );
};

export default AnimeContainer;
