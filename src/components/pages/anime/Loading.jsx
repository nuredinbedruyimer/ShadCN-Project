import React from 'react'
import CustomeSkeloton from './CustomeSkeloton'

const Loading = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
    {"123456789".split("").map(currChar=><CustomeSkeloton key={currChar}/>)}
      
    </div>
  )
}

export default Loading
