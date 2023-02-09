import React from "react";
import { useForm } from "react-hook-form";

const AddBlog = () => {
    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        const product = {
            title: data.title,
            image: data.image,
            category: data.category,
            description: data.description,
            data: new Date().toLocaleDateString(),
        };
        console.log(product);
    };

    return (
        <div >
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='title'>
                        Blog Title
                    </label>
                    <input type='text' id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='category'>
                        Category
                    </label>
                    <select name='category' id='category' {...register("category")}>
                        <option value='tech'>Tech</option>
                        <option value='apps'>Apps</option>
                        <option value='media'>Media</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea
                        className="w-full"
                        type='textarea '
                        name='description'
                        id='description'
                        {...register("description")}
                        cols="30"
                    ></textarea>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-red-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;