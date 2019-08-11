import React from 'react'
import Img from './Img'

var $ = require('jquery')

export default class App extends React.Component {
  constructor (props) {
      super(props);
  }

  render () {
    return (
      <div>
        <Img />
      </div>
    )
  }
}
