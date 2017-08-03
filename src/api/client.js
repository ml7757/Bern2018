import feathers from 'feathers/client'
import rest from 'feathers-rest/client'
import hooks from 'feathers-hooks'
import auth from 'feathers-authentication-client'
import superagent from 'superagent'

const host = 'https://jules-and-matt-api.herokuapp.com'
export const FEATHERS_TOKEN_KEY = 'MattLovesJules'

const feathersClient = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(hooks())
  .configure(auth({
    storage: window.localStorage,
    storageKey: FEATHERS_TOKEN_KEY,
  }))

export default feathersClient
