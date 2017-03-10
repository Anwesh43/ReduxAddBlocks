import BlockListComponent from '../presentational_components/block_list_component'
import toggleColor from '../actions/toggle_color'
import {connect} from 'react-redux'
const mapStateToProps = (state)=>{
    var blocks = state.blocks.map((block)=>{
      return {bg:block.bg,text:block.text}
    })
    return {blocks}
}
const mapDispatchToProps = (dispatch) => {
    return {
      onBlockClick:(index)=>{
        dispatch(toggleColor(index))
    }}
}
const VisibleBlockList = connect(mapStateToProps,mapDispatchToProps)(BlockListComponent)
export default VisibleBlockList
