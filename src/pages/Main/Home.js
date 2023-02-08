import React from "react";
import { useSelector } from "react-redux";
import BlogCart from "../../components/BlogCart";

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  const state = useSelector((state) => state);

  const activeClass = "text-white  bg-red-500 border-white";
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass} `}
        >
          last upload
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          first upload
        </button>
        <button className={`border px-3 py-2 rounded-full font-semibold`}>
          Apps
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 px-10 lg:px-0 md:px-0">
        {blogs?.map((blog, uxi) => (
          <BlogCart key={uxi} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
