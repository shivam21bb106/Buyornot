import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <header>
        <div></div>
            <h1>Is it really worth it </h1>
            <p>Determine will you regret it after spending your hard earned money</p>
            <div className='header-box'>
                <div> <img src='income.svg' width={'20px'} height={'20px'}/> <span>Income </span> </div>
                <div> <img src='goal.svg' width={'20px'} height={'20px'}/> <span>Goal </span></div>
                <div> <img src='result.svg' width={'20px'} height={'20px'}/> <span> Result</span></div>
            </div>
        
    </header>
      
    </>
  )
}

export default Header
