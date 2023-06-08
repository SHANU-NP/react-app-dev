import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [items, setItem] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((reseponse) => {
        const fetchedItems = reseponse.data.map((item) => {
          return {
            id: item.id,
            userId: item.userId,
            title: item.title,
            body: item.body,
          };
        });
        setItem(fetchedItems);
      })
      .catch((reason) => console.log(reason));
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <p>userId : {item.userId}</p>
            <p>title : {item.title}</p>
            <p>body : {item.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DataFetching;
