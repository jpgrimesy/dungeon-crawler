import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'

const client = new ApolloClient ({
  uri: 'https://www.dnd5eapi.co/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ApolloProvider client={client}> 
      <App />
    </ApolloProvider>
  </Router>,
)
