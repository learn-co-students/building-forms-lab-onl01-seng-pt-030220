import React, { Component } from 'react'
import {connect } from 'react-redux'
//import{addBand} from '../actions/bands'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' name="name" value={this.state.name} onChange={this.handleChange}></input>
          <button type="submit">Create Band</button>
        </form>
      </div>
    )
  }
}

//export default connect(null, {addBand})(BandInput)
export default BandInput