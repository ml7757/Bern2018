import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store, { history } from './store'
import { Provider } from 'react-redux'
import SignIn from './users/SignIn'
import AdminPage from './users/AdminPage'
import Home from './container/Home'
import Accomodation from './guests/Accomodation'

injectTapEventPlugin()


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/accomodation" component={Accomodation} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/adminpage" component={AdminPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
