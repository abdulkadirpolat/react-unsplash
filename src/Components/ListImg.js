import React from "react";

function ListImg() {
  return (
    <div className="flex flex-wrap justify-evenly mt-3 mb-12">
      <img
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        className="transform hover:scale-125 hover:z-20 z-0 w-60 h-60  
          bg-no-repeat bg-cover bg-center p-1 rounded-2xl duration-300 ease-in-out "
      />
    </div>
  );
}

export default ListImg;
