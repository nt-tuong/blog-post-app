import React, { useRef, useEffect } from "react";

function Input(props) {
  const refInput = useRef();
  useEffect(()=>{
    if (refInput.current) {
      refInput.current.focus();
    }
  },[])

  return (
    <div className="layout-column justify-content-center align-items-center">
      <input ref={refInput} className="w-100" type="text" placeholder="Enter Title" value={props.blogPost?.title} name="title" data-testid="title-input" onChange={props.handleChange} />
      <textarea className="mt-10 w-100" placeholder="Enter Description" value={props.blogPost?.description} name="description" data-testid="description-input" onChange={props.handleChange} />
    </div>
  );
}

export default Input;
