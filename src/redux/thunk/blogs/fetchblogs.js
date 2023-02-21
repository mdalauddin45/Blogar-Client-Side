import { getContent } from "../../actions/blogAction";


const fetchBlog = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://server-chi-eight.vercel.app/blogs");
        const data = await res.json();

        if (data.length) {
            dispatch(getContent(data));
        }
    };
};

export default fetchBlog;