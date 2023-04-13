import React from 'react'
import DashBoard from './src/screen/Home/DashBoard'
import Category from './src/screen/Category/Category'
import { Provider } from 'react-redux'
import { Store } from './src/store/config/store'

const App = () => {
    return (
        <Provider store={Store}>
            <Category />
        </Provider>
    )
}

export default App