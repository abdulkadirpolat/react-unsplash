import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// function Image({ imgs, i, setShowC, showC }) {
//   const mouseEnter = (e) => {
//     setShowC({ showC: !showC });
//   };
//   const mouseLeave = (e) => {
//     setShowC({ showC: !showC });
//   };

//   return (
//     <figure
//       key={imgs.id}
//       className="  relative m-3"
//       style={{ gridTemplateRows: "masonry" }}
//       onMouseEnter={mouseEnter}
//       onMouseLeave={mouseLeave}
//     >
//       {console.log(imgs)}
//       <img
//         id={imgs.id}
//         style={{ cursor: "zoom-in" }}
//         src={imgs.urls.full}
//         //      className="  z-0 w-80 h-80 bg-no-repeat bg-cover bg-center rounded-2xl  "
//       />
//       {showC ? (
//         <div
//           className={` absolute bottom-6 text-white w-full h-9  justify-between px-5 flex`}
//           //    ${ showContent ? "" : "hidden"  }`}
//         >
//           <div className="cursor-pointer">
//             <img
//               className="rounded-2xl inline-block"
//               src={imgs.user.profile_image.small}
//             />
//             <span className="hover:text-gray-100 text-gray-300">
//               {imgs.user.name}
//             </span>
//           </div>
//           <div className="  bg-gray-200 text-center leading-loose rounded-md cursor-pointer hover:bg-gray-100  ">
//             <a
//               href={`${imgs.links.download}?force=true`}
//               target="_blank"
//               className="px-5"
//             >
//               <FontAwesomeIcon
//                 key={i}
//                 className="text-gray-500 text-sm hover:text-black "
//                 icon={faArrowDown}
//               />
//             </a>
//           </div>
//         </div>
//       ) : null}
//     </figure>
//   );
// }
// export default Image;

// import React from 'react'

function Images({ url }) {
  return (
    <div className="group relative">
      {/* Image shadow */}
      <div className="group-hover: -rigth-1 group-hover:-bottom-1 absolute inset-0 -right-3 -bottom-3 bg-black rounded-lg"></div>

      {/* image itself */}
      <div className="relative group-hover:flex   ">
        <img src={url} className="rounded-lg" />
      </div>
    </div>
  );
}

 
