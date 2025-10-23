import React from "react";

function PostDisplay({ blogPosts, onDelete }) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {
          blogPosts.map((blogPost, index) => {
            return (
              <div className="post-box" key={index}>
                <h3>{blogPost.title}</h3>
                <p>{blogPost.description}</p>
                <button onClick={() => { onDelete(blogPost) }}>Delete</button>
              </div>
            )
          })
        }
      
    </div>
  );
}

export default PostDisplay;
