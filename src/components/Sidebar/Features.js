import React from 'react'
import "./Features.css"
function Features({featureName,Icon}) {
  return (
    <div className='Features'>
        <Icon/>
        <p>{featureName}</p>
    </div>
  )
}
export default Features