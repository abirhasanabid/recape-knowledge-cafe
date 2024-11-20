import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  // time
  const [readTimes, setReadTimes] = useState(0);

  // Times handlear
  const handleReadTimes = (id, times) => {
    setReadTimes(readTimes + times);
    console.log(id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  const handleBookmarks = (blog) => {
    const newBlog = [...bookmarks, blog];
    setBookmarks(newBlog)
  }

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12">
        <Blogs handleBookmarks={handleBookmarks} handleReadTimes={handleReadTimes}></Blogs>
        <Bookmarks readTimes={readTimes} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
};



export default App
