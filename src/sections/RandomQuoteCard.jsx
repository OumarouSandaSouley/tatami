import { Copy, Download, Facebook, Twitter } from "lucide-react";
import domtoimage from "dom-to-image-more";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import CopyToClipboard from "react-copy-to-clipboard";

const RandomQuoteCard = ({ data }) => {
  const [image, setImage] = useState(null);
  const [color, setcolor] = useState("")
  const [copy, setCopy] = useState(false)
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
    if (data != []) {
      setcolor("black");
      handleDownloadImage();
      setCopy(false)
    setcolor("white");
    }
  }, [data]);

  {
    if (data != []) {
      return (
        <>
          <div
            className=" shadow-sm shadow-[#ccc] px-3 bg-[#2b2b2b]"
            ref={divRef}
          >
            <div className="flex max-sm:flex-col max-sm:py-3 items-center gap-4 bg-[#2b2b2b]">
            <img src={data.character_thumbnail_url} className="w-32" alt="" />
            <div className="flex flex-col gap-2">
              <p className={`text-md text-justify text-${color}`}>
                {data.quote}
              </p>
              <h4 className="text-sm italic">
                <span className="text-[#737373]">{data.character},</span>
                <span className="text-[#cd6a6c]"> {data.anime}</span>
              </h4>
            </div>
            </div>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <p>Share this:</p>
            <div className="flex items-center gap-2">
              <Link to={image} download="Quote.png" title="Download the Quote">
                <Download className="size-6 hover:text-primary cursor-pointer" />
              </Link>
              <CopyToClipboard
                text={data.quote}
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
        </>
      );
    }
  }
};

export default RandomQuoteCard;
