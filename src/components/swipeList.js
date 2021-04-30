import React, { Component } from 'react'
import './swipeList.css'

class SwipeList extends Component {
  render() {
    const { children } = this.props
    return <div className="List">{children}</div>
  }
}

export default SwipeList