import React,{PropTypes} from 'react'
const ColorComponent = ({color,onClick})=>{
    var styleObj = {width:"50px",height:"50px",border:'1px solid black',float:'left',background:color}
    return (<div style={styleObj} onClick={onClick}></div>)
}
ColorComponent.propTypes = {
    color:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}
export default ColorComponent
