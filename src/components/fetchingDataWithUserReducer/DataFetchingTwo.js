import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  post: {},
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        post: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((resposne) => {
        dispatch({ type: "FETCH_SUCCESS", payload: resposne.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: "something went wrong!" });
      });
  }, []);

  return (
    <>
      {state.loading ? state.loading : state.post.title}
      {state.error ? state.error : null}
    </>
  );
}

export default DataFetchingTwo;
