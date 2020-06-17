import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Courses from './components/Courses';

const client = new ApolloClient({
  uri: 'http://localhost:4200/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Courses />
    </ApolloProvider>
  );
}

export default App;
