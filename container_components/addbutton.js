import addBlock from '../actions/create_block'
import {connect} from 'react-redux'
import React,{PropTypes} from 'react'
const AddBtn = ({dispatch})=>{
    var onClick = ()=>{
        console.log("clicked")
        dispatch(addBlock(document.getElementById('t1').value))
    }
    return <div>
      <input type='text' id='t1'/>
      <button onClick={onClick}> Submit </button>
    </div>
}
const AddButton = connect()(AddBtn)
export default AddButton
