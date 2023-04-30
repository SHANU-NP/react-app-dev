import React from 'react'
import './appStyles.css'
import style from './appStyles.module.css'
function Inine() {
  return (
    <div>
        <h1 className='error'>Error</h1>
        <h1 className={style.module}>Success</h1>
    </div>
  )
}

export default Inine
