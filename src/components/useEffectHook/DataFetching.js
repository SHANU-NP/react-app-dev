import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [item, setItem] = useState({});
  const [id,setId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((reseponse) => setItem(reseponse.data))
        .catch((reason) => console.log(reason));
  }, [id]);

  return (
    <div>
      <input type="text" onChange={e => {setId(e.target.value)}}/>

      <p>userId : {item.userId}</p>
      <p>title : {item.title}</p>
      <p>body : {item.body}</p>


    </div>
  );
}

export default DataFetching;
