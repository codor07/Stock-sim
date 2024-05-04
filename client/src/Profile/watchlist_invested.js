import React from 'react'

function Watchlist(props) {
    console.log(props.item)
    
  return (
    <>
    <div>{props.item}</div>
    </>
  )
}

export default Watchlist