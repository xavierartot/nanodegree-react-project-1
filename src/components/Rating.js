import React, { Component } from 'react'
import { randomId } from '../../src/Utilities.js'
import { UncontrolledTooltip } from 'reactstrap'

export default class Rating extends Component {
  onClick = () => {

  }
  // svg html
  svgTagHalfLeft = (i, random, starName) => {
    const tag =
      (<svg style={{ width: '10px', height: '20px', fill: '#82e370' }} title={i} id={`${starName + i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" />
        <UncontrolledTooltip placement="top" target={`${starName + i + random}`}>
          {i}.5
        </UncontrolledTooltip>
       </svg>
      )
    return tag
  }

  // svg html
  svgTagHalfRight = (i, random, starName) => {
    const tag =
      (<svg style={{ width: '10px', height: '20px', fill: '#82e370' }} title={i} id={`${starName + i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" />
        <UncontrolledTooltip placement="top" target={`${starName + i + random}`}>
          {i + 1}
        </UncontrolledTooltip>
       </svg>
      )
    return tag
  }
  // svg html
  svgTagGrayRight = (i, random, starName) => {
    const tag =
      (<svg onClick={e => this.props.onClickRating(e)} style={{ width: '10px', height: '20px', fill: '#ccc' }} title={this.props.nameShelf} id={`${starName + i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs />
        <path className={`${this.props.nameShelf}  ${this.props.idBook}`} d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" />
        <UncontrolledTooltip placement="top" target={`${starName + i + random}`}>
          { i + 1 }
        </UncontrolledTooltip>
       </svg>
      )
    return tag
  }
  // svg html
  svgTagGrayLeft = (i, random, starName) => {
    const tag =
      (<svg style={{ width: '10px', height: '20px', fill: '#ccc' }} title={i} id={`${starName + i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" />
        <UncontrolledTooltip placement="top" target={`${starName + i + random}`}>
          { i}.5
        </UncontrolledTooltip>
       </svg>
      )
    return tag
  }

  render() {
  // var definition
    const { average } = this.props,
      styleStar = {
        width: '10px', height: '20px', fill: '#82e370',
      }
    let starDisplay = '',
      starLoop = [],
      random = randomId()

    // test if number
    if (Number.isInteger(average) && average) { // number
      starLoop = [...Array(average)].map((element, i) =>
        (<span className="star" key={randomId()} >
          {this.svgTagHalfLeft(i, random, 'halfLeft')}
          {this.svgTagHalfRight(i, random, 'halfRight')}
        </span>))
      return starDisplay = starLoop
    } else if (average) { // if float number
      starLoop = [...Array(Math.floor(average))].map((element, i) =>
        (<span className="star" key={randomId()} >
          {this.svgTagHalfLeft(i, random, 'halfFloatLeft')}
          {this.svgTagHalfRight(i, random, 'halfFloatRight')}
         </span>))
      starLoop.push(<span className="star" key={randomId()} ><svg style={styleStar} id={`halfLeftEnd${starLoop.length + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" />
        <UncontrolledTooltip placement="top" target={`halfLeftEnd${starLoop.length + random}`}>
          {starLoop.length}.5
        </UncontrolledTooltip>
      </svg>
      </span>)
      return starDisplay = starLoop
    }

    // star gray
    starLoop = [...Array(Math.floor(5))].map((element, i) =>
      (<span className="star" key={randomId()} >
        {this.svgTagGrayLeft(i, random, 'halfLeftGray', true)}
        {this.svgTagGrayRight(i, random, 'halfRightGray', false)}
       </span>))
    starDisplay = starLoop

    return (
      <div className="rating" style={{ display: 'flex' }}>
        <div> {starDisplay}</div>
      </div>
    )
  }
}
