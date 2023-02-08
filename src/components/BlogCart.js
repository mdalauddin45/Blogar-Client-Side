import React from "react";

const BlogCart = ({ blog }) => {
  return (
    <div className="rounded-md shadow-md sm:w-96 ">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src="https://source.unsplash.com/50x50/?portrait"
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">
              leroy_jenkins72
            </h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">
              {blog?.category}
            </span>
          </div>
        </div>
        <button title="Open options" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 h-5 fill-current"
          >
            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
          </svg>
        </button>
      </div>
      <img
        src={blog?.image}
        alt=""
        className="object-cover object-center w-full h-72 dark:bg-gray-500"
      />
      <div className="p-3">
        <h2 className="text-lg font-semibold leading-none">{blog?.title}</h2>
        <p>{blog?.description?.slice(0, 100)}</p>
      </div>
    </div>
  );
};

export default BlogCart;
