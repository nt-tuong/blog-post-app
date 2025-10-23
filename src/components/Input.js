import React, { useRef, useEffect } from "react";

function Input(props) {
  const inputRef = useRef();
  useEffect(()=>{
    const timer = setTimeout(() => {
      inputRef.current?.blur();
      inputRef.current?.focus();
    }, 300); // Adjust delay as needed

    return () => clearTimeout(timer);
  },[])

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input ref={inputRef} className="w-100" type="text" placeholder="Enter Title" value={props.blogPost?.title} name="title" data-testid="title-input" onChange={props.handleChange} />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={props.blogPost?.description} name="description" data-testid="description-input" onChange={props.handleChange} />
    </div>
  );
}

export default Input;
