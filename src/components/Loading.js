import React from 'react'

const cssLoading = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
  width: '100%',
}
const Loading = props => (
  <div className="loading" style={cssLoading}>
    <i className="fa fa-circle-o-notch fa-spin" />
    <span style={{ marginLeft: '.5em' }}>loading...</span>
  </div>
)
export default Loading
