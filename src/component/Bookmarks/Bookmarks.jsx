import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import './readingTime.css'
const Bookmarks = ({ bookmarks, readTimes }) => {

    return (
        <div className="ml-4 bg-[#1111110D] md:col-span-4 lg:col-span-3 rounded-lg">
            <div className=" md:p-4 lg:p-8">
                <h2 className="text-xl text-[#6047EC] font-bold md:py-3 md:px-3 lg:py-5 lg:px-4 time-card">Spent time on read : {readTimes} min</h2>
            </div>
                <h1 className="font-bold text-2xl p-8">Bookmarked Blogs : {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTimes:PropTypes.number
}

export default Bookmarks;