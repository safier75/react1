import React from "react";
const Blogcard=()=>{
    return(
        <div className='col-md-2 col-lg-4 col-12 mb-4'>
            <div className='card border-0 shadow-lg '>
              <img className='card-img-top' src='https://placehold.co/600'/>
              <div className='card-body'>
                <h4>dummy heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium cupiditate ullam, consequuntur odit corporis est non, quia vel, dolore esse impedit. Exercitationem est odit quaerat officiis deserunt facilis nesciunt sequi sunt eos quidem cum aspernatur reprehenderit architecto minima, culpa sit id? Vero, veritatis possimus. Illo quo atque odio tempore.</p>
                <div className='d-flex justify-content-between'>
                  <a href='#'className='btn btn-dark'>Details</a>
                  <a href='#'>edit</a>
                </div>
              </div>
            </div>
          </div>
    )
}
export default Blogcard