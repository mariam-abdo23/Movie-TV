import React from "react";
import { Link, NavLink } from "react-router";

export default function HomeCard({ movies }) {
    return (
        <div className="m-5">
            <div className="row g-5">
                {movies.map((movie) => (
                    <div key={movie.id} className="col-lg-3 col-md-12 col-sm-12 movie-card">
                       
                      <img
                            className="w-100"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="m-3">
                            <h3 style={{color:'brown'}}>{movie.title}</h3>
                            </div>
                            <div className="d-flex justify-content-between fw-bold mb-2 m-4">
                                <p className="text-secondary">{movie.release_date}</p>
                                <p className="text-secondary"><span style={{color:'brown'}}>Vote Average : </span> {movie.vote_average}</p>
                            </div>
                            <Link to= {`/details/${movie.id}`} className="btn ms-4" style={{backgroundColor:'brown' , color:'white'}}>View Details</Link>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}