import React, { Component } from 'react'
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/layout/AddContact'
import EditContact from './components/layout/EditContact'
import { Provider } from './Context'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/add/contact" component={AddContact} />
                <Route exact path="/edit/contact/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
