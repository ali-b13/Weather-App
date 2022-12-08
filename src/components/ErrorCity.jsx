import React from 'react'

export const ErrorCity = props => {
  return (
    <div style={{"color":"rgba(155, 7, 7, 0.842)",fontSize:"1.3rem"}}>
    {props.error} ,Try Again
    </div>
  )
}
