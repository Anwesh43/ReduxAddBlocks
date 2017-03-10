import {connect} from 'react-redux'
import pickColor from '../actions/pick_color'
import colors from '../data/colors'
import ColorListComponent from '../presentational_components/color_list_component'

const mapDispatchToProps = (dispatch) => {
    return {OnColorClick:(index)=>{

        dispatch(pickColor(colors[index]))
    }}
}
const PickColorComponent = connect(null,mapDispatchToProps)(ColorListComponent)
export default PickColorComponent
