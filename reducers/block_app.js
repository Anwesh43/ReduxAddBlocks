const color = "red"
const addBlockReducer = (state=[],action)=> {
    var newState = state
    for (var key in state) {
        newState[key] = state[key]
    }
    if(action.type == "ADD") {
        newState.push({bg:'white',text:action.text})
    }
    if(action.type == "CHANGE") {
        if(action.index<state.length) {
            newState[action.index].bg = (newState[action.index].bg == "white")?"red":"white"
        }
    }
    return newState
}
export default addBlockReducer
