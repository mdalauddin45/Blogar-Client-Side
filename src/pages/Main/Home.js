import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCart from "../../components/BlogCart";
import { toggleBrand, toggleStock } from "../../redux/actions/filterAction";
import { TOGGLE_FIRST, TOGGLE_LAST } from "../../redux/actionTypes/actionTypes";

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  const filters = useSelector((state) => state.filters.filters);
  console.log(filters);
  const { categoris, apps } = filters;

  const dispatch = useDispatch();
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
