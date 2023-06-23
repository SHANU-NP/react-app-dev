import "./App.css";
import React from "react";
import DataFetchingTwo from "./components/fetchingDataWithUserReducer/DataFetchingTwo";
import Count from "./components/useMemo/Count";
import FocusInput from "./components/useRefs/FocusInput";
import ClassTimer from "./components/useRefs/ClassTimer";

function App() {
  return (
    <div>
      <ClassTimer/>
    </div>
  );
}

export default App;
