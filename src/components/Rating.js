import React, { Component } from 'react'
import starHalf from '../icons/star-half.svg'
import star from '../icons/star.svg'


export default class Rating extends Component {
  render() {
    const avg = isNaN(parseFloat(this.props.average))
      ? 0
      : [...Array(this.props.average * 2).fill(3)] // fill the array

    const totalAvg = avg.length
    console.log(totalAvg, (totalAvg % 2))

    const starJsx = (index, starType) => (<div key={index}>
      <img src={starType} alt="star icon" style={{ width: '20px', height: '20px' }} /> xavi
    </div>)

    const displayStar = (avg, totalAvg) => {
      for (let i = 0, len = avg.length; i < len; i++) {
        if (i === totalAvg - 1) {
          starJsx(i, starHalf)
        } else if (i % 2) {
          starJsx(i, star)
        }
      }
    }

    return (
      <div style={{ display: 'flex' }}>
        <div className="rating">
          arrow
          {displayStar(avg, totalAvg)}
        </div>
      </div>
    )
  }
}

