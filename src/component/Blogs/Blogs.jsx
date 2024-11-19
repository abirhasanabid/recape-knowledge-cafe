import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleBookmarks}) => {

    const [bolgs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./cafeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);


    return (
        <div className="grid md:col-span-8 lg:col-span-9">
            {
                bolgs.map(blog=> <Blog handleBookmarks={handleBookmarks} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleBookmarks:PropTypes.func
}

export default Blogs;