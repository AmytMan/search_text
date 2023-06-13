import React, { useState, useEffect } from 'react';

import "./App.css"
function App() {
  const [result, setResult] = useState()
  const [inputValue, setInputValue] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/suggest?q=${inputValue}`)
      const data = await response.json()
      setResult(data)
    }
    fetchData()
  }, [inputValue])

  return (
    <div className='input_container'>
      <div className='input_section'>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} placeholder='search....' />
        {
          inputValue && result ? (

            <div className='dropdown_container'>
              {result.map((item, index) => {
                return (
                  <div key={index} className='dropdown_item'>
                    <div> {item['Search Terms']}</div>
                    <div> {item['Num Searches']}</div>
                  </div>
                  )})
              }
            </div>
            )
          :''
        }
      </div>
    </div>
  )
}

export default App