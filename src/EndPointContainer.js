import React from 'react'; 
import endpointData from '../endpoint-data.js'; 
import EndPointItem from './EndPointItem.js'

export const EndPointContainer = () => {
  const endpoints = endpointData.map(endpoint => (<EndPointItem data={endpoint} />))

  return (
    <div>
      { endpoints }
    </div>
  )
}
