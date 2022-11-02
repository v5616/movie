import React from 'react'
import "./movie.css"
const img_Api = "https://image.tmdb.org/t/p/w1280"

function Movie(props) {

    const click =(id)=>{
        console.log( id ,"xahcds")
    }
    return (
        <>
          <div onClick={()=>click()} className="first">
              <img  src={img_Api + props.img} alt="" />
              <h5 className='mt-3 ml-1' style={{textAlign:"start", color:"white"}}>{props.title}</h5>
          </div>
        </>
    )
}

export default Movie