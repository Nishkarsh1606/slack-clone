import React from 'react'
import "./Features.css"
function Features({ featureName, Icon, onClickGetChannelName, channelID }) {
  return (
    channelID ? (<div className='Features' onClick={()=>onClickGetChannelName(featureName)}>
      <Icon />
      <p>{featureName}</p>
    </div>) :
      (<div className='Features'>
        <Icon />
        <p>{featureName}</p>
      </div>)
  )
}
export default Features