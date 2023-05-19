import React from 'react'

function Hero({heroName}) {
    if(heroName == 'joker'){
        throw new Error("Inavlid name");
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero;
