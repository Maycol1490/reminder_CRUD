import React from 'react'
import '../styles/color.css'

const Colors = ({users,getAllUsers}) => {

  console.log(users)



  return (
    <div className='container-colors'>
        <div className="colors months01">January</div>
        <div className="colors months02">February</div>
        <div className="colors months03">March</div>
        <div className="colors months04">April</div>
        <div className="colors months05">May</div>
        <div className="colors months06">June</div>
        <div className="colors months07">July</div>
        <div className="colors months08">August</div>
        <div className="colors months09">September</div>
        <div className="colors months10">October</div>
        <div className="colors months11">November</div>
        <div className="colors months12">December</div>
    </div>
  )
}

export default Colors
