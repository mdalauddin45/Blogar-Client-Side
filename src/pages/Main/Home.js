import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCart from "../../components/BlogCart";
import { getContent } from "../../redux/actions/blogAction";

import { toggleBrand } from "../../redux/actions/filterAction"
import { GET_CONTENT } from "../../redux/actionTypes/actionTypes";
import fetchBlog from "../../redux/thunk/blogs/fetchblogs";
// import fetchBlog from "../../redux/thunk/blogs/fetchblogs";
const Home = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const blogs = useSelector((state) => state.history.history);
  console.log(blogs);
  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then(res => res.json())
      .then(data => dispatch({
        type: GET_CONTENT,
        payload: data
      }))
  }, [dispatch]);
  console.log(fetchBlog(getContent()))
  // i wanna dispatch this action but i get error
  // how to dispatch this action
  // dispatch(fetchBlog(getContent()))




  const { categoris } = filters;

  const activeClass = "text-white  bg-red-500 border-white";
  let content;
  if (blogs.length) {
    content = blogs.map((blog) => (
      <BlogCart key={blog._id} blog={blog} />
    ));
  }

  if (blogs.length && categoris.length) {
    content = blogs
      ?.filter((blog) => {
        if (categoris.length) {
          return categoris.includes(blog.category);
        }
        return blog;
      })
      ?.map((blog) => (
        <BlogCart key={blog._id} blog={blog} />
      ));
  }


  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">

        <button onClick={() => dispatch(toggleBrand("tech"))} className={`border px-3 py-2 rounded-full font-semibold ${categoris.includes("tech") ? activeClass : null}`}>
          Tech
        </button>
        <button onClick={() => dispatch(toggleBrand("apps"))} className={`border px-3 py-2 rounded-full font-semibold ${categoris.includes("apps") ? activeClass : null}`}>
          APPS
        </button>
        <button onClick={() => dispatch(toggleBrand("media"))} className={`border px-3 py-2 rounded-full font-semibold ${categoris.includes("media") ? activeClass : null}`}>
          Media
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 px-10 lg:px-0 md:px-0">
        {
          content
        }
      </div>
    </div>
  );
};

export default Home;
