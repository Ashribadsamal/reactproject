import {useState , useEffect} from 'react'
import './App.css';
import Recipes from './Recipes';

function App() {
   const [fruit, setfruit] = useState([])
   const [search , setsearch] = useState('')
   const [query , setquery] = useState('chicken')

  const APP_ID = "6ddcd0ad";
  const APP_KEY = "4ba29c81911d001d966a94956dc5e28b	"

  //const exReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  //important//

  //this api work only for limited period 

   useEffect(()=>{
    getData()

   },[query]);

   const getData = async () =>{
     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
     );
     const data = await response.json();
     setfruit(data.hits)
     console.log(data.hits); 
   }

   const updateSearch = e =>{
     setsearch(e.target.value)
   };
   const getSearch = e =>{
     e.preventDefault();
     setquery(search);
     setsearch('');
   }

  return (
  
    <div className="App">
      <form className = "search_form"  onSubmit = {getSearch}>
        <input type = "text" className  = "search-bar" value = {search} onChange = {updateSearch}/>
        <button className = "search_button" type = "submit">Search</button>
      </form>
      <div className="recipe">
      {fruit.map(item =>(
        <Recipes 
        key = {item.recipe.label}
        title={item.recipe.label} image={item.recipe.image}
        calorie ={item.recipe.calories}
        ingredient ={item.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
