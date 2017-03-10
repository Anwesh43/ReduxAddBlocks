import React,{PropTypes} from 'react'
import BlockComponent from './block_component'
const BlockListComponent = ({blocks,onBlockClick})=>{
    console.log(blocks)
    const blockComps =blocks.map((block,index)=><BlockComponent key ={`block_${index}`} block={block} onClick={()=>onBlockClick(index)}/>)
    return (<div>
              {blockComps}
          </div>)
}
BlockListComponent.propTypes = {
    blocks:PropTypes.arrayOf(PropTypes.shape({bg:PropTypes.string.isRequired,text:PropTypes.string.isRequired}).isRequired).isRequired,
    onBlockClick:PropTypes.func.isRequired
}
export default BlockListComponent
