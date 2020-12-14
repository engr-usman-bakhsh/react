import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import { Provider } from './context'
import AddContact from './components/contacts/AddContact'

function App() {
  return (
    <Provider>
      <div className="App">
        <Header branding='Contact Manager' />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
