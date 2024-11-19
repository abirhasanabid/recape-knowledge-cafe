import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;

    return (
        <div className="m-4">
            <h2 className="bg-[#FFFFFF] p-5 rounded-lg text-[18px] font-semibold">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;