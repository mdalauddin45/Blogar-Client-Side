
import { addContent } from "../../actions/blogAction";


const addBlogData = (blog) => {
    return async (dispatch) => {
        const res = await fetch("https://server-chi-eight.vercel.app/blogs", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(
                addContent({
                    _id: data.insertedId,
                    ...blog,
                })
            );
        }
    };
};

export default addBlogData;