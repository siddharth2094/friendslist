import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import FriendList from "../src/components/FriendList";



function App() {
  return (

    <BrowserRouter >
      <Switch>
            <Route
              exact
              path="/"
              component={FriendList}
            />
      </Switch>
    </BrowserRouter>
  )
}

export default App
