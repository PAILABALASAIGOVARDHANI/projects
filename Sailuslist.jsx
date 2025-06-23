import { useState } from 'react'
import img1 from './image/v1.jpg'
import img2 from './image/v2.jpg'
import img3 from './image/v3.jpg'
import Sailu from './Sailus.jsx'
function SailusList(){
    let [Sailus,setSailus]=useState([
        {
        id:1,
        image:img1,
        name:"Nandhu"
        },
        {
        id:2,
        image:img2,
        name:"Nandhu"
        },
        {
        id:3,
        image:img3,
        name:"Nandhu"
        },
    
    ])

    let deleteCard=(id)=>{
        console.log(id,"Deleted")
        let newList=Sailus.filter((sailu)=>sailu.id!=id)
        setSailus(newList);
        console.log(newList)
    }


        
    
    
    let sailusList=Sailus.map((s)=> 
    <Sailu image={s.image}
     name={s.name}
     delete={()=>deleteCard(s.id)}
     />)

     

    return(
        <>
        {sailusList}
        </>
    )}

export default SailusList