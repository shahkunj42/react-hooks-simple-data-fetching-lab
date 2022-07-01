// create your App component here
import react from "react";
import { useState, useEffect } from "react";

function App(){
    const[isLoading, setIsLoading] = useState(false)
    const[data, setData] = useState([])

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r=>r.json())
        .then(data => {
            console.log(data)
            setData(data.message)
            setIsLoading(true)
    })
    }, [])

    if(!isLoading) return(<p>Loading</p>)

    return(
        <div>
            <img src={data} alt="A Random Dog"/>
        </div>
    )
}



export default App