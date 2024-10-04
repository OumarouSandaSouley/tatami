import AnimeList from "../sections/AnimeList";
import Hero from "../sections/Hero";
import SearchAnimeCharacter from "../sections/SearchAnimeCharacter";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Hero />
      <SearchAnimeCharacter />
      <AnimeList />
    </div>
  );
};

export default Home;
