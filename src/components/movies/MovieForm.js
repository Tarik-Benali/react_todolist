import React,{useState} from 'react'

function MovieForm({addMovie}) {

  const [values,setValues] = useState({titre:'',realisateur:'',duree:'',image:''});


  function onchangeValue(e){
    const {name,value} = e.target;
    console.log(name, value);
    setValues({...values,[name]:value})
  }

  function Enregistrement(evenet){
    evenet.preventDefault();
    console.log(values);
    addMovie(values);
  }

  return (
    <div style={{marginTop: '20px', backgroundColor: '#37FEF4'}}>
        <form>
          <input type="text" placeholder='titre du film' name='titre' value={values.titre} onChange={onchangeValue}></input><br/>
          <input type="text" placeholder='realisateur' name='realisateur' value={values.realisateur} onChange={onchangeValue}></input><br/>
          <input type="text" placeholder='durée' name='duree' value={values.duree} onChange={onchangeValue}></input><br/>
          <input type="text" placeholder='image' name='image' value={values.image} onChange={onchangeValue}></input>


          <br/>    

          <button onClick={Enregistrement}>Inserer le film !</button>
      </form>
    </div>
    
    
  )
}

export default MovieForm