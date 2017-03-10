import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import AddButton from './container_components/addbutton'
import VisibleBlockList from './container_components/visible_block_list'
import addBlockReducer from './reducers/block_app'
const store = createStore(addBlockReducer)
store.subscribe(()=>{console.log(store.getState())})
const App = ()=>{
    return <Provider store={store}>
      <div>
          <VisibleBlockList/>
          <AddButton/>
      </div>
    </Provider>
}
render(<App/>,document.getElementById('comp'))
