import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPost(response.data);
        setError("");
        setLoading(false);
      })
      .catch((error) => {
        setPost({});
        setError("something went wrong!");
        setLoading(false);
      });
  },[]);

  return (
    <div>
      {loading ? "loading .........." : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
