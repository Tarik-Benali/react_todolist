import React,{useState} from 'react'
import Movie from './Movie'
import titanic from '../../assets/images/titanic.png';
import terminator from '../../assets/images/terminator.jpg';
import avatar from '../../assets/images/avatar.jpg';
import batman from '../../assets/images/batman.jpg';
import django from '../../assets/images/django.jpg';
import rpo from '../../assets/images/rpo.jpg';
import MovieForm from './MovieForm';
function MoviesListe() {
  const moviesList = [
    {titre:"Titanic",         realisateur:"Readly Scott",     duree:"1h47",   image:titanic   },
    {titre:"Terminator",      realisateur:"James Camron",     duree:"1h50",   image:terminator},
    {titre:"Avatar",          realisateur:"James Camron",     duree:"2h50",   image:avatar    },
    {titre:"Batman",          realisateur:"Christopher Nolan",duree:"2h13",   image:batman    },
    {titre:"Django",          realisateur:"Tarantino",        duree:"3h15",   image:django    },
    {titre:"Ready Player One",realisateur:"Steven Spilberg",  duree:"2h40",  image:rpo        },
  ];

  const [movies,setMovies] = useState(moviesList);
  const [search,setSearch] = useState('');

  const filteredMovies = (title) =>{
    if(title === "") return movies;
    return movies.filter(movie=>{
      return movie.titre.includes(title)
    })
  }

  const onChange= (e)=>{
    setSearch(e.target.value);
    filteredMovies(e.target.value)
  } 

  function addMovie(newMovie){
    setMovies([...movies,newMovie]);
  }

  return (
    <div>

        <MovieForm addMovie={addMovie} />

        <h3>
            Listes des films nominés au oscards: 
        </h3>
        <div style={{background:'purple'}}>
          <input value={search}onChange={onChange} />
        </div>

        <ul>
          {
            filteredMovies.length? filteredMovies(search).map(element => {
              return(<Movie title={element.titre} realisateur={element.realisateur} duree={element.duree} image={element.image}/>)
            }):<h1>hhh</h1>
          }
        </ul>
    </div>
  )
}

export default MoviesListe