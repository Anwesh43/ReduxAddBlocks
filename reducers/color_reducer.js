const colorReducer = (state='red',action) => {
    var newState = state
    if(action.type == "CHANGE_COLOR") {
        newState = action.color
    }
    return newState
}
export default colorReducer
