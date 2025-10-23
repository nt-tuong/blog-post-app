import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const refInput = useRef();

  const [blogPost, setBlogPost] = useState({
    title: "",
    description: ""
  });
  const [blogPosts, setBlogPosts] = useState([]);
  
  const handleChange = (e) => {
    setBlogPost(prev => {
      const newBlogPost = { ...prev };
      newBlogPost[e.target.name] = e.target.value;
      return newBlogPost;
    });
  }

  const onCreate = (data) => {
    if (!blogPost.title || !blogPost.description) return;
    setBlogPosts((prevItems)=>{
      const nextItem = [...prevItems];
      nextItem.push(blogPost);
      return nextItem;
    });
    
    // clear data
    setBlogPost(()=>{
      return {
        title: "",
        description: ""
      }
    });
  }
  
  const onDelete = (value) => {
    setBlogPosts((prevItems) => {
      const nextItems = [ ...prevItems ];
      var indexOfValue = nextItems.indexOf(value);
      if (indexOfValue > -1) {
        nextItems.splice(indexOfValue, 1);
      }

      return nextItems;
    });
  }

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input 
          blogPost={blogPost} 
          setBlogPost={setBlogPost} 
          handleChange={handleChange}
        />
        <button 
          data-testid="create-button" 
          className="mt-10" 
          onClick={onCreate}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay
          blogPosts={blogPosts}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default Home;
