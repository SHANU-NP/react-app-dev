import React from "react";
import './myStyleSheet.css'


export default function StayleSheets({isPrimaryEnabled}) {
  let className = isPrimaryEnabled ? 'primary' : 'secondary'
  return (
    <div>
      <h1 className={className}>StayleSheets</h1>
    </div>
  );
}
