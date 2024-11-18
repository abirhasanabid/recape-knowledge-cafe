import { IoBookmarkOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    const { cover_img, profile_img, name, read_time, release_date, title, hashtags } = blog;
    return (
        <div className="mb-11 pb-8 border-b">
            <img className="rounded-lg" src={cover_img} alt="vlogs title" />
            <div className="flex items-center justify-between mt-8 mb-4">

                <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full object-cover" src={profile_img} alt="" />
                    <div>
                        <h3>{name}</h3>
                        <p>{release_date}</p>
                    </div>
                </div>
                <span className="flex items-center gap-2">{read_time} min <IoBookmarkOutline></IoBookmarkOutline></span>
            </div>
            <h2 className="font-bold text-4xl mb-4">{title}</h2>
            <p className="mb-5">
                {
                    hashtags.map((hash, idx) => <span key={idx} className="mr-5">{hash}</span>)
                }
            </p>
            <span className="text-[#6047EC] font-semibold
            text-xl ">Mark as read</span>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
}

export default Blog;