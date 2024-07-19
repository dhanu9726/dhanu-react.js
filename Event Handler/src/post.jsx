import { useEffect, useState } from "react";
export default function Post()
 {
    const [data, setdata] = useState([]);

      const fetchdata = () =>{
           fetch("https://jsonplaceholder.typicode.com/posts ")
           .then((res)=>res.json())
           .then((data)=> 
        {
            setdata(data)
        })
        .catch((err)=>console.log(err))
      }
      fetchdata()
    return(
        <div>
            {
                data.map((el)=>( 
               <div key={el.id} style={{border:"2px solid green", width:"80%", margin:"20px auto"}}>
                <h4 style={{color:"blue"}} >Id:{el.id} </h4>
                <h3 style={{color:"red"}}>{el.title} </h3>
                <h3>{el.body} </h3>
               </div>
            ))
            }
        </div>
    )  
 }