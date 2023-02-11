import React from "react";
import { useDispatch } from "react-redux";
import { BiListPlus } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { addHistory, removeFromHistory } from "../redux/actions/blogAction";


const BlogCart = ({ blog }) => {
  const dispatch = useDispatch();
  const pathname = window.location.pathname;

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
      <div className='flex gap-2 mt-5'>
        {!pathname.includes("history") && (
          <button
            onClick={() => dispatch(addHistory(blog))}
            className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          >
            Reading History
          </button>
        )}

        {!pathname.includes("history") && (
          <button
            title='Add to wishlist'
            className='bg-red-500   py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
        )}
        {pathname.includes("history") && (
          <button
            title='Remove'
            onClick={() => dispatch(removeFromHistory(blog))}
            className='flex justify-between px-3 bg-red-500 text-white p-1 rounded-full flex-1'
          >
            <p>Remove</p>
            <MdDeleteForever size='25' />
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCart;
