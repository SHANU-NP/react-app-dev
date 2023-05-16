import React from 'react'

// function FrInput() {
//   return (
//     <div>
//         <input type='text'></input>
//     </div>
//   )
// }

const FrInput = React.forwardRef((props,ref) => {

  return(
    <div>
      <input type='text' ref={ref}></input>
    </div>
  )

});

export default FrInput;
