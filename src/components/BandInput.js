// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value})
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
        <label>
          Band Name:
        </label>
          <input type="text" name="name" value={this.state.name} onChange={this.onChange}/>
       
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default BandInput
