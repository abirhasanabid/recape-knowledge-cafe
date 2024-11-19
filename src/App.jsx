import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (blog)=>{
    const newBlog = [...bookmarks,blog];
    setBookmarks(newBlog)
  }

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12">
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
};



export default App
