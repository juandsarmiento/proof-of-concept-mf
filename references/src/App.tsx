import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import List from './modules/List'
import Detail from './modules/Detail'

const App = () => (
  <div>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/references' />
      </Route>
      <Route exact path='/references' component={List} />
      <Route exact path='/references/:ean' component={Detail} />
      <Route>Not Found</Route>
    </Switch>
  </div>
)

export default App
