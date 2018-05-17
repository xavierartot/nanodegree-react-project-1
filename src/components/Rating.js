import React, { Component } from 'react'
import { randomId } from '../../src/Utilities.js'
import { UncontrolledTooltip } from 'reactstrap'

export default class Rating extends Component {
  render() {
  // var definition
    const { average } = this.props,
      styleStar = {
        width: '10px', height: '20px', fill: '#82e370',
      },
      styleStarGray = {
        width: '10px', height: '20px', fill: '#ccc',
      }
    let starDisplay = '',
      starLoop = [],
      random = randomId()

    // test if number
    if (Number.isInteger(average) && average) { // number
      starLoop = [...Array(average)].map((element, i) =>
        (<span className="star" key={randomId()} >
          <svg style={styleStar} title={i} id={`halfLeft${i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" />
            <UncontrolledTooltip placement="top" target={`halfLeft${i + random}`}>
              {i}.5
            </UncontrolledTooltip>
          </svg>

          <svg style={styleStar} id={`halfRight${i + random}`} title={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" /></g></g>
            <UncontrolledTooltip placement="top" target={`halfRight${i + random}`}>
              {i + 1}
            </UncontrolledTooltip>
          </svg>
        </span>))
      return starDisplay = starLoop
    } else if (average) { // if float number
      starLoop = [...Array(Math.floor(average)).fill(1)].map((element, i) =>
        (<span className="star" key={randomId()} >
          <svg style={styleStar} id={`halfLeftFloat${i + random}5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" />
            <UncontrolledTooltip placement="top" target={`halfLeftFloat${i + random}5`}>
              {i}.5
            </UncontrolledTooltip>
          </svg>
          <svg style={styleStar} id={`halfRightFloat${i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" /></g></g>
            <UncontrolledTooltip placement="top" target={`halfRightFloat${i + random}`}>
              {i + 1}
            </UncontrolledTooltip>
          </svg>
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
    starLoop = [...Array(Math.floor(5)).fill(1)].map((element, i) =>
      (<span className="star" key={randomId()} >
        <svg style={styleStarGray} id={`halfLeftGray${i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><path className="cls-1" d="M267.5,0a31.63,31.63,0,0,0-28.7,17.8L173.5,150.2,27.4,171.4C1.2,175.2-9.3,207.5,9.7,226L115.4,329l-25,145.5c-4.5,26.1,23,46,46.4,33.7l130.7-68.6Z" />
          <UncontrolledTooltip placement="top" target={`halfLeftGray${i + random}`}>
            {i + 1}
          </UncontrolledTooltip>
        </svg>
        <svg style={styleStarGray} id={`halfRightGray${i + random}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.5 511.93"><defs /><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,439.6l130.7,68.6c23.4,12.3,50.9-7.6,46.4-33.7L152.1,329,257.8,226c19-18.5,8.5-50.8-17.7-54.6L94,150.2,28.7,17.8A31.63,31.63,0,0,0,0,0Z" /></g></g>
          <UncontrolledTooltip placement="top" target={`halfRightGray${i + random}`}>
            {i + 1}.5
          </UncontrolledTooltip>
        </svg>
       </span>))
    starDisplay = starLoop


    return (
      <div className="rating" style={{ display: 'flex' }}>
        <div> {starDisplay}</div>
      </div>
    )
  }
}
