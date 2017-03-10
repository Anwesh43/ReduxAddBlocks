import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import AddButton from './container_components/addbutton'
import VisibleBlockList from './container_components/visible_block_list'
import addBlockReducer from './reducers/block_app'
import PickColorComponent from './container_components/pick_color_component'
import colorReducer from './reducers/color_reducer'
const store = createStore(combineReducers({color:colorReducer,blocks:addBlockReducer}))

const App = ()=>{
    return <Provider store={store}>
      <div>
          <VisibleBlockList/>
          <PickColorComponent/>
          <AddButton/>
      </div>
    </Provider>
}
render(<App/>,document.getElementById('comp'))
