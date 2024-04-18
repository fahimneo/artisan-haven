import Img1 from "../../assets/Untitled design (1).png";
import Img2 from "../../assets/Untitled design (2).png";
import Img3 from "../../assets/Untitled design (3).png";
import Img4 from "../../assets/Untitled design (4).png";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full rounded-xl">
        <div id="item1" className="carousel-item w-full">
          <img src={Img1} className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={Img2} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={Img3} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={Img4} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
