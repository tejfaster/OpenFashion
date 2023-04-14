import React from 'react'
import { Provider } from 'react-redux'
import { Store } from './src/store/config/store'
import Stack from './src/router/Stack'

const App = () => {
    return (
        <Provider store={Store}>
            <Stack />
        </Provider>
    )
}

export default App