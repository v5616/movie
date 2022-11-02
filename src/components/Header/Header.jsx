import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import Movie from "../movie/Movie";

function Header() {
  const img_Api = "https://image.tmdb.org/t/p/w1280"
  const api =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=10e784bf2808e363f5cc8d92fe6d8000";
  const [movies, setMovies] = useState([]);
  const [first, setfirst] = useState("")
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);

const  click =(id)=>{
console.log(id,"dfsfds");
setfirst(id)
}


  return (
    <>
      <div className="header">
        <div className="img">
          <img
            style={{ opacity: ".9", zIndex: "-1", overflow: "hidden",width:"100%",height:"700px" }}
            className="img"
            src={img_Api+first.backdrop_path}
            alt=""
          />
        </div>

        <div className="container1  ">
          <div>
            <h1 className="ml-4">
              <span style={{ color: "yellow" }}>🎬 Ro</span>
              <span style={{ color: "red", fontSize: "2.2rem" }}>wth 🎥</span>
            </h1>
          </div>

          <div className="mt-5  ">
            <h1
              style={{
                color: "white",
                fontSize: "5rem",
                position: "relative",
                top: "8px",
                left: "30px",
              }}
            >
              {first.title}
            </h1>
          </div>
          <div className="mt-3 all" style={{ width: "50%" }}>
            <p>
             {first.overview}
            </p>
          </div>
          <div className="mt-3 all">
            <h4>
              <span style={{ fontFamily: "cursive" }}> Director </span>:{" "}
              <span style={{ color: "gold" }}> Vishal </span>{" "}
            </h4>
          </div>
          <div className="all d-flex">
            <h4>
              {" "}
              <span style={{ fontFamily: "cursive" }}>Rating </span> :{" "}
              <span style={{ color: "gold" }}>{first.vote_average} </span>
            </h4>
            <h4 style={{marginLeft:"26px"}}> <span style={{ fontFamily: "cursive" }}>Realese Date </span> :{" "}
              <span style={{ color: "gold" }}>{first.release_date} </span></h4>
          </div>

          <div className="raecto ">
            {movies.map((item,index) => {
              
              return (
                
               <div  onClick={()=>click(item)}>

                  <Movie
                  key ={index} id={`testjxdh${index}`} onClick={()=>click(item)}
                  img={item.poster_path}
                  title={item.title}
                  
                  />
                  </div>
             
              );
            })}
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default Header;
