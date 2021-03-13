import React, { useState, useEffect } from 'react';
import Posts from './Components/Posts';
import Pagination from './Components/Pagination';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    // let url ="/src/Data.json";
    // fetch(url)
    //   .then(res=>res.json())
    //   .then(loading=>setLoading(False))
    const fetchPosts = async () => {
      setLoading(true);
      const res = '/src/Data.json';
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);



  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}
export default App;