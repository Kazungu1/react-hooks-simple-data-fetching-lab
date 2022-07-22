// create your App component here
import React,{useEffect,useState} from "react"

const App = () => {
    const[image,setImage] = useState('')


    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setImage(data.message);
        })
    },[])

    if(!image) return <h3>Loading ... </h3>

    return ( 
        <img src={image} alt="A Random Dog" />
    );
}

export default App; 