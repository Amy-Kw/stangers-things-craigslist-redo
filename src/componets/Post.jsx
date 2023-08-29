import React, { useEffect, useState } from "react";
import { fetchAllPosts, deletePost } from "../API";
import { useNavigate } from "react-router-dom";


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const navigate = useNavigate();

  async function getAllPosts() {
    const APIResponse = await fetchAllPosts();
    console.log(APIResponse)
    if (APIResponse.success) {
      setPosts(APIResponse.data.posts);
      // setPosts(APIResponse.data)
    } else {
      setError(APIResponse.error.message);
    }
  }

//Post are created from using postman, there is abunch of them on the API for you to test the delete button. They are called Amy test
  async function handleDelete(id) {
    try {
      const result = await deletePost(id);
      console.log(result)
      if (result.success) {
        getAllPosts(); 
        console.log('show success')
        // when you click the ok from the alert, the delete post will dissapear without having to refesh the page
        alert("Deleted Post!")
      } else {
        console.log('this is a fail')
        alert("Delete Post Failed!")
      }
    
    
    } catch (error) {
      console.error(error);
    }
  }

 
  useEffect(() => {
    getAllPosts();
  }, []);


const visablePostList = searchParam
  ? posts.filter((post) =>
      post.title.toLowerCase().includes(searchParam)
  )
  : posts;


console.log(visablePostList)
  return (
    <div className="AllPostsHere">
      <div className="SearchSection">
        <label>
          Search:{" "}
          <input
          type="text"
          placeholder="search"
          onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
          />
        </label>
      </div>


    
      {visablePostList.map((post) => {
        return (
          <div  key={post._id}>
          <h3 id="post-component"> {post.title} </h3>
            <p> {post.description} </p>
            <p> {post.price} </p>

      <button onClick={() => handleDelete(post._id)}>Delete Post</button>

          </div>
        );
      })}
    
    </div>
  )
  }

