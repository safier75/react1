import React from "react";
import Blogcard from "./blogcard";

const Blogs = ()=>{
    return(
        <div className='container'>
        <div className='d-flex justify-content-between pt-4'>
          <h4>Blogs</h4>
          <a href='/create' className='btn btn-dark'>Create</a>
        </div>
        <div className='row'>
          <Blogcard/>
          <Blogcard/>
          <Blogcard/>
          <Blogcard/>
          <Blogcard/>
          <Blogcard/>
        </div>

      </div>
  
    )
}
export default Blogs