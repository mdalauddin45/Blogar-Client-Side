import { deleteContent } from "../../actions/blogAction";

const deleteBlog = (id) => {
    console.log(id)
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(deleteContent(id));
            // console.log(dispatch(deleteContent(id)))
        }
    };
};

export default deleteBlog;