import React from 'react'
import './Movie.css'


function Movie(MovieInfos) {
  return (
    <div>
        Film : <b>{MovieInfos.title}</b> <br/>
        Réalisateur : <b>{MovieInfos.realisateur}</b> <br/>
        Durée : <b>{MovieInfos.duree}</b> <br/>
        <img className='image' src={MovieInfos.image} alt='{MovieInfos.title}' />

        <hr/>
    </div>
  )
}

export default Movie