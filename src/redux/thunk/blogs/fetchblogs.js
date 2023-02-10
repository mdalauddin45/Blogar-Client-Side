import { getContent } from "../../actions/blogAction";

const fetchBlog = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/blogs");
            const data = await response.json();
            dispatch(getContent(data));
        } catch (error) {
            console.log(error);
        }
    }
}

export default fetchBlog;