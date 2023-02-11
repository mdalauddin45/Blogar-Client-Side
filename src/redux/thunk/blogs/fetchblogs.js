import { getContent } from "../../actions/blogAction";


const fetchBlog = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blogs");
        const data = await res.json();

        if (data.length) {
            dispatch(getContent(data));
        }
    };
};

export default fetchBlog;