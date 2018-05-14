import React, { Component } from 'react'
import starHalf from '../icons/star-half.svg'
import star from '../icons/star.svg'


export default class Rating extends Component {
  randomId = () => Math.random().toString(6).substr(-8)
  render() {
    const { average } = this.props
    const avg = isNaN(parseFloat(average))
      ? 0
      : [...Array(average * 2).fill(3)] // fill the array

    const totalAvg = avg.length
    console.log(totalAvg, (totalAvg % 2))

    const styleStar = {
      width: '20px', height: '20px',
    }

    let starDisplay = ''
    const avare = avg.length && avg.map((element, i) => {
      if (i === totalAvg - 1) {
        starDisplay = (
          <img src={starHalf} alt="star icon" style={styleStar} />
        )
      } else if (i % 2 === 0) {
        console.log('pair')
        starDisplay = (
          <img src={star} alt="star icon" style={styleStar} />
        )
      } else {
        starDisplay = ''
      }
      return starDisplay = <div key={this.randomId()}>{starDisplay}</div>
    })
    console.log(avare)

    return (
      <div>
        <div className="rating" style={{ display: 'flex' }} >
          {
            avare
          }
        </div>
      </div>
    )
  }
}

