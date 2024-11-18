import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [bolgs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./cafeData.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);


    return (
        <div className="grid col-span-9">
            {
                bolgs.map(blog=> <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;