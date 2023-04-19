const initialState = [

]
const shop = (state=initialState, action)=>{
    switch (action.type) {
        case 'img':
            state.push(action.payload)
            return state
        default:
            return state
    }
}
export default shop