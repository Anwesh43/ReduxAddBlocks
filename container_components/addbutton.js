import addBlock from '../actions/create_block'
import {connect} from 'react-redux'
import React,{PropTypes} from 'react'
const AddButton = (dispatch)=>{
    var onClick = ()=>{
        dispatch(addBlock(this.refs.t1.value))
    }
    <div>
      <input type='text' ref='t1'/>
      <button onClick={onClick}>suBMIT</button>
    </div>
}
AddButton.propTypes = {
    dispatch:propTypes.func.isRequired
}
AddButton = connect()(AddButton)
export default AddButton
