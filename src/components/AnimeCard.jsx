import { Link } from "react-router-dom";

const AnimeCard = ({ animeName }) => {
  const param = encodeURIComponent(animeName);
  return (
    <Link
      to={`/quotebyanime/${param}`}
      className="w-full px-4 py-3 shadow-sm shadow-primary text-primary hover:opacity-90"
    >
      {animeName}
    </Link>
  );
};

export default AnimeCard;
