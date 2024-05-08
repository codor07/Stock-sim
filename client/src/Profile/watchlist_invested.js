import React from 'react';

function Watchlist(props) {
    console.log(props.item)
    
  return (
    <>
    <div className="lists">{props.item}
    </div>
    </>
  )
}

export default Watchlist;