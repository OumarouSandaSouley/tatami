import { Copy, Download, Facebook, Twitter } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import html2canvas from "html2canvas";
import CopyToClipboard from "react-copy-to-clipboard";

const QuoteCard = ({ d, anime, character, type }) => {
  const [image, setImage] = useState(null);
  const [color, setcolor] = useState("");
  const [copy, setCopy] = useState(false);
  const divRef = useRef();
  const handleDownloadImage = async () => {
    const canvas = await html2canvas(divRef.current, {
      useCORS: true,
      backgroundColor: null,
    });
    const dataUrl = canvas.toDataURL("image/jpg");
    setImage(dataUrl);
  };
  useEffect(() => {
    if (d != []) {
      setcolor("black");
      handleDownloadImage();
      setCopy(false)
      setcolor("white");
    }
  }, [d]);
  return (
    <div
      className="shadow-[#ccc] w-full shadow-sm rounded-md py-4 px-3"
      ref={divRef}
    >
      <div className="flex max-sm:flex-col max-sm:py-3 items-center gap-4  bg-[#2b2b2b]">
        <img src={d.character_thumbnail_url} className="w-32" alt="" />
        <div className="flex flex-col gap-2">
          <p className={`text-md text-justify text-${color}`}>{d.quote}</p>
          <h4 className="text-sm italic">
            <span className="text-[#737373]">
              {type == "character" ? character : d.character},{" "}
            </span>
            <span className="text-[#cd6a6c]">
              {" "}
              {type == "character" ? d.anime : anime},{" "}
            </span>
          </h4>
        </div>
      </div>
      <div className="flex items-center mt-8 gap-4">
        <p>Share this:</p>
        <div className="flex items-center gap-2">
          <Link to={image} download="Quote.png" title="Download the Quote">
            <Download className="size-6 hover:text-primary cursor-pointer" />
          </Link>
          <CopyToClipboard
            text={d.quote}
            onCopy={() => {
              setCopy(true);
            }}
          >
            <Copy
              className={`size-6 hover:text-primary cursor-pointer ${
                copy ? "text-primary" : ""
              }`}
            />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
