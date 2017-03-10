const addBlockReducer = (state={blocks:[]},action)=> {
    var newState = Object.assign({},state)
    var blocks = newState.blocks
    if(action.type == "ADD") {
        blocks.push({bg:'white',text:action.text})
    }
    if(action.type == "CHANGE") {
        if(i<blocks.length) {
            blocks[action.index].bg = action.color
        }
    }
    return newState
}
export default addBlockReducer
