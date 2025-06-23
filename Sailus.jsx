import { useState } from 'react'
import img1 from './image/v1.jpg'
import './App.css'
function Sailu(value){
    let [Fav,setFav]=useState("Add to Fav")
    let [Added,setAdded]=useState("want to Add")
    let changeFav=()=>{
        console.log(value.name,"Added to Fav")
        
        if(Fav=='Added to Fav'){
            setFav("Add to Fav")
            setAdded("Want to add")
        }
        else{
            setFav("Added to Fav")
            setAdded("Added")

        }

        }
    
    return(
        <div className='Box'>
            <img src={value.image} alt="" />
            <p>{value.name}</p>
            <button onClick={changeFav}>{Fav}</button>
            
            <button onClick={value.delete}>Delete</button>
            
             
            
        </div>
    )
}

     export default Sailu
