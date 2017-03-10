import React,{PropTypes} from 'react'
import BlockComponent from './block_component'
const BlockListComponent = ({blocks,onBlockClick})=>{
    const blockComps =blocks.map((block,index)=><BlockComponent block={block} onClick={onBlockClick(index)}/>)
    return (<div>
              {blockComps}
          </div>)
}
BlockListComponent.propTypes = {
    blocks:PropTypes.arrayOf(PropTypes.shape({bg:PropTypes.string.isRequired,test:PropTypes.string.isRequired})),
    onBlockClick:PropTypes.func.isRequired
}
export default BlockListComponent
