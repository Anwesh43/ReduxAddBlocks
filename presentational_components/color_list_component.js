import React,{PropTypes} from 'react'
import ColorComponent from './color_component'
import colors from '../data/colors'
const ColorListComponent = ({OnColorClick})=>{
    return (<div>
              {colors.map((color,index)=><ColorComponent key={`color_${index}`} color={color} onClick={()=>{OnColorClick(index)}}/>)}
          </div>)
}
ColorListComponent.propTypes = {
    OnColorClick:PropTypes.func.isRequired
}
export default ColorListComponent
