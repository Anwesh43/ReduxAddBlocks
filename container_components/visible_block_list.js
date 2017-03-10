import BlockListComponent from '../presentational_components/block_list_component'
import toggleColor from '../actions/toggle_color'
import {connect} from 'react-redux'
const mapStateToProps = (state)=>{
    return {blocks:state.blocks}
}
const mapDispatchToProps = (dispatch) => {
    return {onBlockClick:(index)=>{
        dispatch(index,'red')
    }}
}
const VisibleBlockList = connect(mapStateToProps,mapDispatchToProps)(BlockListComponent)
export default VisibleBlockList
