import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchWithButton() {

    const [id,setId] = useState(1);
    const [post,setPost] = useState({});
    const [idFromButton , setIdFromButton] = useState(1);

    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(response => setPost(response.data))
        .catch(error => console.log("error occurred"))

    },[idFromButton])


const clickHandler = () => {
    setIdFromButton(id)
}

  return(
    <div>
        <input type="text" value={id} name="name" onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={clickHandler}>fetch data</button>
        <div>{post.title}</div>
    </div>
  )
}

export default FetchWithButton;
