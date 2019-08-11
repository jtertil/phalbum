import React from 'react'
import { Container, Button, Image } from 'react-bootstrap'

const $ = require('jquery')

const imgStyle = {
  maxHeight: '100%',
  maxWidth: '100%'
}

const contStyle = {
  height: '80%',
  width: '100%'
}

export default class Img extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgPath: ''
    }

    // binding necessary to make `this` work in the callback
    this.getPythonImg = this.getPythonImg.bind(this)
  }

  imgLink (filename) {
    this.setState({ imgPath: 'dist/img/' + filename })
  }

  getPythonImg () {
    $.get(window.location.href + 'img_list', (data) => {
      console.log(data)
      this.imgLink(data)
    })
  };

  render () {
    return (
      <Container>
        <div style={contStyle}>
          <Image className='mx-auto d-block pt-2' style={imgStyle} src={this.state.imgPath} />
        </div>
        <div>
          <hr />
          <Button className='mx-auto d-block' variant='info' onClick={this.getPythonImg}>!</Button>
        </div>
      </Container>
    )
  }
}
