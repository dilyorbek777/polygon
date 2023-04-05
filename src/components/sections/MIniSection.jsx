import React, { useState, useEffect } from 'react'

function MIniSection() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/root").then(data=> data.json()).then(res=> setData(res))
    console.log(data);
  }, [])
  

  return (
    <div>
      <h2>Popular Destinations</h2>
      
      {
        data ? data.map((element, index) => (
          <img key={index} src={element.img} alt="" />
        )):null
      }
    </div>
  )
}


export default MIniSection