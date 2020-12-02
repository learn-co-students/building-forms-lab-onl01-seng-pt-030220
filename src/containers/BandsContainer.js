import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <h1>Bands Container</h1>
        
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => <li key={band.name}>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const addBand = (band) => {
  return {
    type: 'ADD_BAND', 
    band: band
  }
}

// export default BandsContainer
export default connect(mapStateToProps, {addBand})(BandsContainer)