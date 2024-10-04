import logo from "../assets/images/logo.png";
import hero from "../assets/images/hero.png";
import small from "../assets/images/small.png";
import small1 from "../assets/images/small1.png";
import { Copy, Download, Facebook, RefreshCw, Twitter } from "lucide-react";
import { fetchRandomQuote } from "../api";
import { useEffect, useState } from "react";
import RandomQuoteCard from "./RandomQuoteCard";
import { Link } from "react-router-dom";
const Hero = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await fetchRandomQuote();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full pt-16 first-letter:flex items-center justify-center">
      <div className="grid gap-16 sm:grid-cols-2">
        <div className="flex flex-col">
          <img src={small1} className="w-16 mb-4" alt="" />
          <h1 className="text-5xl capitalize mb-4">
            The Anime Quote <br />{" "}
            <span className="text-primary">Universe</span>
          </h1>
          <p className="text-lg">
            Explore the most inspiring and uplifting anime quotes. Share them as
            images, text on your favorite social media.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Link
              to="/animelist"
              className="bg-primary border-2 border-primary px-4 py-3 text-white rounded-md hover:opacity-90"
            >
              Explore anime list
            </Link>
            <a
              href="#"
              className="bg-transparent border-2 border-primary px-4 py-3 text-primary rounded-md hover:bg-primary hover:text-white"
            >
              Search character
            </a>
          </div>
          <div className="mt-8">
            <h4 className="text-3xl font-bold">500+ animes</h4>
          </div>
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center w-full justify-between px-4 mb-4">
            <span className="text-md ">Random Quote</span>
            <RefreshCw className="cursor-pointer size-8" onClick={fetchData}/>
          </div>
          <RandomQuoteCard data={data} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
