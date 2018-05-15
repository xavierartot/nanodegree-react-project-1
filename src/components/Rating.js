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
    const starLoop = [...Array(Math.floor(average)).fill(1)].map((element, i) => {
      // console.log(i, Math.floor(average), Math.ceil(average), Math.floor(average) - 1)
      if (i !== (Math.floor(average) - 1)) {
        return (<img key={randomId()} src={star} alt="star icon " style={styleStar} />)
      }
      return (<span key={randomId()}><img key={randomId()} src={star} alt="star icon " style={styleStar} /><img src={starHalf} alt="star icon " style={styleStar} /></span>)
    })
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
