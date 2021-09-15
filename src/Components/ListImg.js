import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ListImg({ unsplash }) {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(()=> {
    setShowContent(false)
  }, [unsplash] )

  const mouseContainer = (e) =>  {
    setShowContent(false)
    console.log(e)
  }

  const mouseEnter = () => setShowContent(!showContent);
  const mouseLeave = () => setShowContent(!showContent);

  return (
    <div  onMouseLeave={mouseContainer} className="flex flex-wrap mt-3  justify-evenly  ">
      {unsplash.map((imgs) => (
        <div
          key={imgs.id}
          className="  relative m-3"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <img
            style={{ cursor: "zoom-in" }}
            src={imgs.urls.thumb}
            className="  z-0 w-80 h-80   
          bg-no-repeat bg-cover bg-center rounded-2xl  "
          />

          <div
            className={` absolute bottom-6 text-white w-full h-9  justify-between px-5 flex ${
              showContent ? "" : "hidden"
            }`}
          >
            <div className="cursor-pointer">
              <img
                className="rounded-2xl inline-block"
                src={imgs.user.profile_image.small}
              />
              <span className="hover:text-gray-100 text-gray-300">
                {" "}
                {imgs.user.name}
              </span>
            </div>
            <div className="  bg-gray-200 text-center leading-loose rounded-md cursor-pointer hover:bg-gray-100  ">
              <a href={ `${imgs.links.download}?force=true`} target="_blank" className="px-5">
                <FontAwesomeIcon
                  className="text-gray-500 text-sm hover:text-black "
                  icon={faArrowDown}
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListImg;
