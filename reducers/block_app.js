const color = "red"
const addBlockReducer = (state={blocks:[]},action)=> {
    var newState = {}
    for (var key in state) {
        newState[key] = state[key]
    }
    var blocks = newState.blocks
    if(action.type == "ADD") {
        blocks.push({bg:'white',text:action.text})
    }
    if(action.type == "CHANGE") {
        if(action.index<blocks.length) {
            blocks[action.index].bg = (blocks[action.index].bg == "white")?"red":"white"
        }
    }
    return newState
}
export default addBlockReducer
