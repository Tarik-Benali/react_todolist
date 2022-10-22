import React from 'react'
import './Movie.css'


function Movie(MovieInfos) {
  return (
    <li>
        Film : <b>{MovieInfos.title}</b> <br/>
        Réalisateur : <b>{MovieInfos.realisateur}</b> <br/>
        Durée : <b>{MovieInfos.duree}</b> <br/>
        <img className='image' src={MovieInfos.image} alt='{MovieInfos.title}' />

        <hr/>
    </li>
  )
}

export default Movie