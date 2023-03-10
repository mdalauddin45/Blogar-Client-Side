import { deleteContent } from "../../actions/blogAction";

const deleteBlog = (id) => {
    // console.log(id)

    return async (dispatch) => {
        const res = await fetch(`https://server-chi-eight.vercel.app/blogs/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(deleteContent(id));
        }
    };
};

export default deleteBlog;