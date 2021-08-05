import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import Apollo from './apollo'
import App from './App'

import './assets/css/index.css'

ReactDOM.render(
  <ApolloProvider client={Apollo}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
