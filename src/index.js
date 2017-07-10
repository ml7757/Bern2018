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
import GuestItem from './users/GuestItem'
import Home from './containers/Home'
import Accomodation from './guests/Accomodation'
import GuestEditor from './guests/GuestEditor'
import Contact from './guests/Contact'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

injectTapEventPlugin()


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/accomodation" component={Accomodation} />
        <Route path="/contact" component={Contact} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/guests/:guestId/edit" component={GuestEditor} />
        <Route path="/guests/:guestId" component={GuestItem} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
