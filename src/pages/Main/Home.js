import React from "react";
import BlogCart from "../../components/BlogCart";

const Home = () => {
  const [blogs, setBlogs] = React.useState([]);
  React.useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-10 px-10 lg:px-0 md:px-0">
      {blogs?.map((blog, uxi) => (
        <BlogCart key={uxi} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
