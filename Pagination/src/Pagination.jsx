import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pagination.css';
function Pagination()
{
   //create states for data 

   const[posts, setPosts]= useState([]);
   const[currentPage, setCurrentPage]= useState(1);
   
   const PPP=10;
   const totalPages=Math.ceil(posts.length/PPP);
   
  const lastPost= (currentPage*PPP);
  const firstPost= lastPost-PPP;


   const currentPosts= posts.slice(firstPost, lastPost)
  
   const PrevHandler=()=>{
         if(currentPage>1){
               setCurrentPage(prev=> prev-1)
        }
}

  const NextHandler=()=>{
         if(currentPage<totalPages){
               setCurrentPage(prev=> prev+1)
        }
}
  

   useEffect(()=>{
         const fetchData= async()=>{
              try{
                    const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
                    setPosts(res.data);


                 }
               catch(error){
                       console.log("Data not found/ API is not working", error);

                      }
               

}  

    fetchData();

},[])


return(

    <>
  <div className="pagination-container">
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
  {currentPosts.map((post) => (
    <tr key={post.id}>
      <td data-label="User ID">{post.userId}</td>
      <td data-label="ID">{post.id}</td>
      <td data-label="Title">{post.title}</td>
      <td data-label="Body">{post.body}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>

    <div className="pagination-controls">
      <button onClick={PrevHandler} disabled={currentPage === 1}>
        Prev
      </button>

      <span className="page-number">{currentPage}</span>

      <button onClick={NextHandler} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  </div>
</>

)}

export default Pagination;