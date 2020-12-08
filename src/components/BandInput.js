// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  onChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addBand({...this.state})
    this.setState({name: ''})
  }

  render() {
    console.log(this.state.name)
    return(
      <form onSubmit={this.onSubmit}>
    	    <label>Add Band</label>
          <input type="text" onChange={this.onChange} value={this.state.name}/>
          <input type="submit" />
       </form>
    )
  }
}

export default BandInput
