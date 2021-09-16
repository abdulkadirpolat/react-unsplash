import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faPlus,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function ListImg({ unsplash }) {

  return (
    <div className="flex flex-wrap mt-3 justify-evenly">
      {unsplash.map((imgs, i) => (
        <div
          key={imgs.id}
          className="relative mb-3 group "
          title={imgs.description}
        >
          <div className="absolute w-full h-full group-hover:bg-black group-hover:bg-opacity-25 rounded-2xl"></div>
          <img
            id={imgs.id}
            style={{ cursor: "zoom-in" }}
            src={imgs.urls.regular}
            className="  z-0 w-88 h-88 bg-no-repeat bg-cover bg-center rounded-2xl"
          />
          <div
            className="absolute inset-x-0 top-0 m-5 h-9 flex justify-between
           opacity-0 group-hover:opacity-100"
          >
            <div>{imgs.sponsorship}</div>
            <div className="flex">
              <div
                className="px-4 mr-2 bg-gray-200 leading-loose rounded-md 
                cursor-pointer hover:bg-gray-100"
                title="Like photo"
              >
                <FontAwesomeIcon
                  className="text-gray-500 text-sm hover:text-gray-800"
                  icon={faHeart}
                />
              </div>
              <div
                className="px-4 bg-gray-200 text-center leading-loose rounded-md 
              cursor-pointer hover:bg-gray-100"
                title="Add to collection"
              >
                <FontAwesomeIcon
                  className="text-gray-500 text-sm hover:text-gray-800 "
                  icon={faPlus}
                />
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-6 text-white w-full
           h-9 justify-between px-5 flex opacity-0 group-hover:opacity-100"
          >
            <div className="cursor-pointer">
              <img
                className="rounded-2xl inline-block mr-2"
                src={imgs.user.profile_image.small}
              />
              <span className="hover:text-gray-100 text-gray-300">
                {imgs.user.name}
              </span>
            </div>
            <div className=" bg-gray-200 text-center leading-loose rounded-md cursor-pointer hover:bg-gray-100  ">
              <a
                href={`${imgs.links.download}?force=true`}
                title="Download photo"
                target="_blank"
                className="px-4 group"
              >
                <FontAwesomeIcon
                  key={i}
                  className="text-gray-500 text-sm hover:text-gray-800  "
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
