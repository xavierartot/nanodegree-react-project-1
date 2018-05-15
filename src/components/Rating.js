import React from 'react'
import starHalf from '../icons/star-half.svg'
import star from '../icons/star.svg'

const Rating = ({ average }) => {
  // var definition
  const randomId = () => Math.random().toString(6).substr(-8),
    styleStar = {
      width: '20px', height: '20px',
    }
  let starDisplay = '',
    starDisplayHalf = ''

  // test if number or float number
  if (Number.isInteger(average) && average) { // number
    const starLoop = [...Array(average)].map((element, i) => (<img key={randomId()} src={star} alt="star icon " style={styleStar} />))
    return starDisplay = starLoop
  } else if (average) { // float number
    const starLoop = [...Array(Math.floor(average)).fill(1)].map((element, i) =>
      (<img key={randomId()} src={star} alt="star icon " style={styleStar} />))
    starLoop.push(<img key={randomId()} src={starHalf} alt="star icon " style={styleStar} />)
    starDisplay = starLoop
  }


  return (
    <div>
      <div className="rating" style={{ display: 'flex' }} >
        <div key={randomId()}> {starDisplay}</div>
      </div>
    </div>
  )
}
export default Rating
