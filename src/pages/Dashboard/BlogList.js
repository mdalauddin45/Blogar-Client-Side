import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteBlog from "../../redux/thunk/blogs/deleteBlog";
import fetchBlog from "../../redux/thunk/blogs/fetchblogs";

const BlogList = () => {
    const blogs = useSelector((state) => state.history.blogs);
    console.log(blogs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlog())
    }, [dispatch]);




    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-gray-800'>Blogs</div>
                </header>

                <div className='overflow-x-auto p-3'>
                    <table className='table-auto w-full'>
                        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th>Image</th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Blog Title</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>category</div>
                                </th>

                                <th className='p-2'>
                                    <div className='font-semibold text-center'>Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className='text-sm divide-y divide-gray-100'>
                            {blogs?.map((blog) => (
                                <tr key={blog._id}>
                                    <td className='p-2'>
                                        <img className="w-20" src={blog?.image} alt="" />
                                    </td>
                                    <td className='p-2'>
                                        <div className='font-medium text-gray-800'>{blog?.title}</div>
                                    </td>
                                    <td className='p-2'>
                                        <div className='text-left capitalize'>{blog?.category}</div>
                                    </td>


                                    <td className='p-2'>
                                        <div className='flex justify-center'>
                                            <button onClick={() => dispatch(deleteBlog(blog._id))}>
                                                <svg
                                                    className='w-8 h-8 hover:text-red-500 rounded-full hover:bg-gray-100 p-1'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    viewBox='0 0 24 24'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        strokeLinecap='round'
                                                        strokeLinejoin='round'
                                                        strokeWidth='2'
                                                        d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        // </section>
    );
};

export default BlogList;