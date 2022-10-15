import React from 'react'
import Movie from './Movie'
import titanic from '../../assets/images/titanic.png';
import terminator from '../../assets/images/terminator.jpg';
import avatar from '../../assets/images/avatar.jpg';
import batman from '../../assets/images/batman.jpg';
import django from '../../assets/images/django.jpg';
import rpo from '../../assets/images/rpo.jpg';
function MoviesListe() {
  return (
    <div>
        <h3>
            Listes des films nominés au oscards: 
        </h3>

        <Movie title="Titanic" realisateur="Readly Scott" duree="1h47" image={titanic}/>
        <Movie title="Terminator" realisateur="James Camron" duree="1h50" image={terminator}/>
        <Movie title="Avatar" realisateur="James Camron" duree="2h50" image={avatar}/>
        <Movie title="Batman" realisateur="Christopher Nolan" duree="2h13" image={batman}/>
        <Movie title="Django" realisateur="Tarantino" duree="3h15" image={django}/>
        <Movie title="Ready Player One" realisateur="Steven Spilberg" duree="2h40" image={rpo}/>


    </div>
  )
}

export default MoviesListe