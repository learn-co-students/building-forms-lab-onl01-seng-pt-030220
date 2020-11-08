import React, { Component } from 'react'
import { connect } from 'react-redux'
import BadInput from '../components/BandInput'

class BandsContainer extends Component {

  render() {
    console.log(`aa`,this.props.bands)
    return(
      <div>
        <BadInput addBand={this.props.addBand} />
      <div>
           <ul>
            {this.props.bands.map(band=>{
               return  <li> {band.name} </li>}
            )}
            </ul>
        </div>
      </div>
    )
  }
}



const mapStateToProps=state=>{

   return {bands: state.bands}
}

const mapDispatchToProps=dispatch=>{
 
 // const  addBand = (band)=>{return {type:'ADD_BAND',band}}
  return { addBand: band => dispatch({type:'ADD_BAND',band}) }
}
export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer)
