import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;

const fetchRandomQuote = async () => {
  try {
    const res = await axios.get(
      "https://anime-quotes5.p.rapidapi.com/api.php?random=random",
      {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "anime-quotes5.p.rapidapi.com",
        },
      }
    );
    return res.data[0];
  } catch (err) {
    console.log(err);
  }
};

const fetchAnimeList = async () => {
  try {
    const res = await axios.get(
      "https://anime-quotes5.p.rapidapi.com/api.php?anime=list",
      {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "anime-quotes5.p.rapidapi.com",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const fetchAnimeByAnimeName = async (anime) => {
  try {
    const res = await axios.get(
      `https://anime-quotes5.p.rapidapi.com/api.php?anime=${anime}`,
      {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "anime-quotes5.p.rapidapi.com",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const fetchAnimeByCharacterName = async (character) => {
  try {
    const res = await axios.get(
      `https://anime-quotes5.p.rapidapi.com/api.php?character=${character}`,
      {
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "anime-quotes5.p.rapidapi.com",
        },
      }
    );
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export {
  fetchRandomQuote,
  fetchAnimeList,
  fetchAnimeByAnimeName,
  fetchAnimeByCharacterName,
};
