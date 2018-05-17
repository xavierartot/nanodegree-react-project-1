import React from 'react'
import { randomId } from '../../src/Utilities.js'

const Rating = ({ average }) => {
  // var definition
  const styleStar = {
    width: '10px', height: '20px', fill: '#82e370',
  }
  let starDisplay = '',
    starLoop = []

  // test if number
  if (Number.isInteger(average) && average) { // number
    starLoop = [...Array(average)].map((element, i) =>
      (<span className="star" key={randomId()} >
        <svg style={styleStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" /></svg>
        <svg style={styleStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" /></g></g></svg>
      </span>))
    // starLoop.push(<img src={halfRight} alt="star icon " style={styleStar} />)
    return starDisplay = starLoop
  } else if (average) { // if float number
    starLoop = [...Array(Math.floor(average)).fill(1)].map((element, i) =>
      (<span className="star" key={randomId()} >
        <svg style={styleStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" /></svg>
        <svg style={styleStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" /></g></g></svg>
      </span>))
    starLoop.push(<span className="star" key={randomId()} ><svg style={styleStar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" /></svg></span>)
    return starDisplay = starLoop
  }

  return (
    <div>
      <div className="rating" style={{ display: 'flex' }}>
        <div> {starDisplay}</div>
      </div>
    </div>
  )
}
export default Rating
