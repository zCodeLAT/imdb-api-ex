import React from 'react'

const MovieData = (data) => {
    console.log(data);
  return (
    <div>
    <h2>{data.title}</h2>
    <h3>{data.rating}</h3>
    <p>{data.plot}</p>
    <p>{data.actors}</p>
    <p>{data.director}</p>
    </div>
  )
}

export default MovieData