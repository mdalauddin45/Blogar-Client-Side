import React from 'react';
import { useSelector } from 'react-redux';
import BlogCart from '../../components/BlogCart';

const History = () => {

    const history = useSelector(state => state.history.history);
    console.log(useSelector(state => state.history))


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10">
            { /*
          history sorted by date up to down
           */}
            {
                history?.sort((a, b) => b.date - a.date)?.map((blog, uxi) => (
                    <BlogCart key={uxi} blog={blog} />
                ))

            }
        </div>
    );
};

export default History;