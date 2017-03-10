import React,{PropTypes} from 'react'
const BlockComponent = ({block,onClick}) => {
    console.log(block)
    var styleObj = {background:block.bg,width:'200px',height:'200px',textAlign:'center',fontSize:'24px',border:'1px dotted black'}
    return <div style={styleObj} onClick={onClick}>
        {block.text}
    </div>
}
BlockComponent.propTypes ={
  block: PropTypes.shape({bg:PropTypes.string.isRequired,text:PropTypes.string.isRequired}).isRequired,
  onClick:PropTypes.func.isRequired
}
export default BlockComponent
